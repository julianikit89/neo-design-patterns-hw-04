
    export class DocumentBuilder {
      private header: string = "";
      private body: string = "";
      private footer: string = "";

      public addHeader(header: string): DocumentBuilder {
        this.header = header;
        return this;
      }

      public addBody(body: string): DocumentBuilder {
        this.body = body;
        return this;
      }

      public addFooter(footer: string): DocumentBuilder {
        this.footer = footer;
        return this;
      }

      public build(): string {
        const parts: string[] = [];

        if (this.header) {
          parts.push(`=== ${this.header} ===`);
        }

        if (this.body) {
          parts.push(this.body);
        }

        if (this.footer) {
          parts.push(this.footer);
        }

        return parts.join("\n\n");
      }
    }