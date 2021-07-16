export class Token {
    private id: string;
    private auth: string;
    private expiration: string;


	constructor(id: string, auth: string, expiration: string) {
		this.id = id;
		this.auth = auth;
		this.expiration = expiration;
    }

	public getid(): string {
		return this.id;
	}


	public getauth(): string {
		return this.auth;
	}

	public getexpiration(): string {
		return this.expiration;
	}

  
	public setid(value: string) {
		this.id = value;
	}

	public setauth(value: string) {
		this.auth = value;
	}

	public setexpiration(value: string) {
		this.expiration = value;
	}
	}



