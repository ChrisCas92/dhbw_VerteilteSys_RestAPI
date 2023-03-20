const swaggerDocs = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Example REST API Book Service",
    description: "API for books",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  host: "localhost:4000",
  basePath: "/books",
  tags: [
    {
      name: "Books",
      description: "books in the database",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/": {
      get: {
        tags: ["Books"],
        summary: "Get all books in the system",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Book",
            },
          },
        },
      },
    },
    "/{id}": {
      get: {
        tags: ["Books"],
        summary: "Get a specific book by id",
        parameters: [
          {
            name: "id",
            in: "body",
            description: "Id of the book searched for",
            schema: {
              $ref: "#/definitions/Book",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Book",
            },
          },
        },
      },
    },
    "/search": {
      get: {
        tags: ["Books"],
        summary: "Get a specific book by title",
        parameters: [
          {
            name: "title",
            in: "path",
            description: "Title of the book searched for",
            schema: {
              $ref: "#/definitions/Book",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Book",
            },
          },
        },
      },
    },
    "/add": {
      post: {
        tags: ["Books"],
        summary: "Add a new book",
        parameters: [
          {
            name: "book",
            in: "body",
            description: "Book to be added",
            schema: {
              $ref: "#/definitions/Book",
            },
          },
        ],
        responses: {
          201: {
            description: "Created",
            schema: {
              $ref: "#/definitions/Book",
            },
          },
        },
      },
    },
  },
  definitions: {
    Book: {
      required: ["title", "author"],
      properties: {
        _id: {
          type: "string",
          uniqueItems: true,
        },
        title: {
          type: "string",
        },
        author: {
          type: "string",
        },
        pages: {
          type: "integer",
        },
      },
    },
  },
};

export default swaggerDocs;
