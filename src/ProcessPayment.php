<?php

declare(strict_types=1);

require __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;
use Flutterwave\Flutterwave;
use Flutterwave\Service\Transactions;
use \Flutterwave\Config\PackageConfig;

$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->safeLoad();


function initFlutterwave(): Flutterwave
{
    $myConfig = PackageConfig::setUp(
        $_ENV['SECRET_KEY'],
        $_ENV['PUBLIC_KEY'],
        $_ENV['ENCRYPTION_KEY'],
        'staging',
    );

    try {
        Flutterwave::bootstrap($myConfig);
        return new Flutterwave();
    } catch (\Exception $e) {
        echo $e->getMessage();
        return null;
    }
}

function validateTx(string $transactionId)
{

    $client = initFlutterwave();
    if ($client === null) {
        return json_encode(['error' => 'Failed to initialize Flutterwave']);
    }

    $history = new Transactions();
    try {
        $res = $history->verify($transactionId);
        return json_encode($res);
    } catch (\Exception $e) {
        return json_encode(['error' => $e->getMessage()]);
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['transactionId'])) {
    $transactionId = $_GET['transactionId'];
    validateTx($transactionId);
    exit;
} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission 😔, please try again.";
    exit;
}
