<?php

namespace App\Exceptions;

use Exception;

class AdminAccessException extends Exception
{
    public function __construct(
        string $message = 'You do not have permission to access this page.'
    ) {
        parent::__construct($message);
    }
}
