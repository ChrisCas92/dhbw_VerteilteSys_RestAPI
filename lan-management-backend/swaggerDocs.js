const swaggerDocs = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Lan Management API",
    description: "Lan Management API Information",
  },
  host: "localhost:4000",
  basePath: "/",
  tags: [
    {
      name: "Lan Management",
      description: "Lan Management API",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/events": {
      get: {
        tags: ["Lan Management"],
        summary: "Get all events",
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Events",
            },
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/events/search": {
      get: {
        tags: ["Lan Management"],
        summary: "Get events by name",
        parameters: [
          {
            name: "name",
            in: "query",
            description: "Name of the event",
            schema: {
              type: "string",
              $ref: "#/definitions/Events",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Events",
            },
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/events/location": {
      get: {
        tags: ["Lan Management"],
        summary: "Get events by location",
        parameters: [
          {
            name: "location",
            in: "query",
            description: "Location of the event",
            schema: {
              type: "string",
              $ref: "#/definitions/Events",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Events",
            },
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/events/date": {
      get: {
        tags: ["Lan Management"],
        summary: "Get events by date",
        parameters: [
          {
            name: "date",
            in: "query",
            description: "Date of the event",
            schema: {
              type: "string",
              $ref: "#/definitions/Events",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Events",
            },
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/events/:id": {
      get: {
        tags: ["Lan Management"],
        summary: "Get event by id",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of the event",
            schema: {
              type: "string",
              $ref: "#/definitions/Events",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Events",
            },
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/events/add": {
      post: {
        tags: ["Lan Management"],
        summary: "Add new event",
        parameters: [
          {
            name: "name",
            in: "body",
            description: "Name of the event",
            schema: {
              type: "string",
              $ref: "#/definitions/Events",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Events",
            },
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
  },

  definitions: {
    Events: {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        location: {
          type: "string",
        },
        date: {
          type: "string",
        },
        participants: {
          type: "integer",
        },
      },
    },
  },
};

export default swaggerDocs;
