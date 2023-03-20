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
        tags: ["Events"],
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
        tags: ["Events"],
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
        tags: ["Events"],
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
        tags: ["Events"],
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
    "/events/{id}": {
      get: {
        tags: ["Events"],
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
        tags: ["Events"],
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

    "/games": {
      get: {
        tags: ["Games"],
        summary: "Get all games",
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Games",
            },
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/games/search": {
      get: {
        tags: ["Games"],
        summary: "Get games by name",
        parameters: [
          {
            name: "name",
            in: "query",
            description: "Name of the game",
            schema: {
              type: "string",
              $ref: "#/definitions/Games",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Games",
            },
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/games/{id}": {
      get: {
        tags: ["Games"],
        summary: "Get event by id",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of the event",
            schema: {
              type: "string",
              $ref: "#/definitions/Games",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Games",
            },
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/games/add": {
      post: {
        tags: ["Games"],
        summary: "Add new game",
        parameters: [
          {
            name: "name",
            in: "body",
            description: "Name of the game",
            schema: {
              type: "string",
              $ref: "#/definitions/Games",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Games",
            },
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/games/patch": {
      patch: {
        tags: ["Games"],
        summary: "Update game details",
        parameters: [
          {
            name: "name",
            in: "body",
            description: "Name of the game to be changed",
            schema: {
              type: "object",
              $ref: "#/definitions/Games",
              properties: {
                name: {
                  type: "string",
                },
                minPlayers: {
                  type: "integer",
                },
                maxPlayers: {
                  type: "integer",
                },
                priceMoney: {
                  type: "number",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Games",
            },
          },
          404: {
            description: "Games Not Found",
          },
        },
      },
    },

    "/participants": {
      get: {
        tags: ["Participants"],
        summary: "Get all participants",
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Participants",
            },
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/participants/search": {
      get: {
        tags: ["Participants"],
        summary: "Get participants by Last name",
        parameters: [
          {
            name: "lastName",
            in: "query",
            description: "Last name of the participant",
            schema: {
              type: "string",
              $ref: "#/definitions/Participants",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Participants",
            },
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/participants/gamerTag": {
      get: {
        tags: ["Participants"],
        summary: "Get participants by gamerTag",
        parameters: [
          {
            name: "gamerTag",
            in: "query",
            description: "The GamerTag of the participant",
            schema: {
              type: "string",
              $ref: "#/definitions/Participants",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Participants",
            },
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/participants/{id}": {
      get: {
        tags: ["Participants"],
        summary: "Get Participant by id",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of one Participant",
            schema: {
              type: "string",
              $ref: "#/definitions/Participants",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Participants",
            },
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/participants/add": {
      post: {
        tags: ["Participants"],
        summary: "Add new Participant",
        parameters: [
          {
            name: "firstName",
            in: "body",
            description:
              "Participant First Name, Last Name, GameTag, SeatNumber",
            schema: {
              type: "string",
              $ref: "#/definitions/Participants",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            schema: {
              $ref: "#/definitions/Participants",
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
        startDate: {
          type: "string",
        },
        endDate: {
          type: "string",
        },
        entry: {
          type: "string",
        },
        start: {
          type: "string",
        },
        end: {
          type: "string",
        },
        participants: {
          type: "integer",
        },
      },
    },

    Games: {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        minPlayers: {
          type: "integer",
        },
        maxPlayers: {
          type: "integer",
        },
        priceMoney: {
          type: "integer",
        },
      },
    },

    Participants: {
      type: "object",
      properties: {
        firstName: {
          type: "string",
        },
        lastName: {
          type: "string",
        },
        gamerTag: {
          type: "string",
        },
        seatNumber: {
          type: "integer",
        },
      },
    },
  },
};

export default swaggerDocs;
