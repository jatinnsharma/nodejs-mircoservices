const STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
}

class AppError extends Error {
    statusCode: number;
    isOperational: boolean;
    errorStack?: string;
    logError?: boolean;

    constructor(name: string, statusCode: number, description: string, isOperational: boolean, errorStack?: string, logingErrorResponse?: boolean) {
        super(description);
        this.name = name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.errorStack = errorStack;
        this.logError = logingErrorResponse;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    }
}

// API Specific Errors
class APIError extends AppError {
    constructor(name: string, statusCode: number = STATUS_CODES.INTERNAL_ERROR, description: string = 'Internal Server Error', isOperational: boolean = true) {
        super(name, statusCode, description, isOperational);
    }
}

// 400
class BadRequestError extends AppError {
    constructor(description: string = 'Bad request', logingErrorResponse?: boolean) {
        super('BAD REQUEST', STATUS_CODES.BAD_REQUEST, description, true, undefined, logingErrorResponse);
    }
}

// 400  
class ValidationError extends AppError {
    constructor(description: string = 'Validation Error', errorStack?: string) {
        super('BAD REQUEST', STATUS_CODES.BAD_REQUEST, description, true, errorStack);
    }
}

export {
    AppError,
    APIError,
    BadRequestError,
    ValidationError,
    STATUS_CODES,
}
