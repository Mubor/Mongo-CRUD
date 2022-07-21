export class BadRequest extends Error {
	constructor() {
		super("Bad Request");
	}
}

export class NotFoundError extends Error {
	constructor() {
		super("Not Found");
	}
}
