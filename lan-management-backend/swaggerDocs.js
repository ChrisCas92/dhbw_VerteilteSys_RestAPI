const swaggerDocs = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Lan Management API",
    description: "Lan Management API Information",
  },
  host: "localhost:4000",
  basePath: "/",
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
    "/events/eventid": {
      get: {
        tags: ["Events"],
        summary: "Get event by eventId",
        parameters: [
          {
            name: "eventId",
            in: "query",
            description: "Id of the event",
            required: true,
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
          201: {
            description: "Created",
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
    "/events/patch": {
      patch: {
        tags: ["Events"],
        summary: "Update event details",
        parameters: [
          {
            name: "eventId",
            in: "query",
            description: "ID of the event to be updated",
            schema: {
              type: "integer",
              format: "int64",
            },
            required: true,
          },
          {
            name: "name",
            in: "query",
            description: "Name of the Event to be changed",
            schema: {
              $ref: "#/definitions/Events",
            },
          },
          {
            name: "location",
            in: "query",
            description: "Location of the Event to be changed",
            schema: {
              $ref: "#/definitions/Events",
            },
          },
          {
            name: "startDate",
            in: "query",
            description: "Start date of the Event to be changed",
            schema: {
              $ref: "#/definitions/Events",
            },
          },
          {
            name: "endDate",
            in: "query",
            description: "End date of the Event to be changed",
            schema: {
              $ref: "#/definitions/Events",
            },
          },
          {
            name: "entry",
            in: "query",
            description: "Entry of the Event to be changed",
            schema: {
              $ref: "#/definitions/Events",
            },
          },
          {
            name: "start",
            in: "query",
            description: "Start time of the Event to be changed",
            schema: {
              $ref: "#/definitions/Events",
            },
          },
          {
            name: "end",
            in: "query",
            description: "End time of the Event to be changed",
            schema: {
              $ref: "#/definitions/Events",
            },
          },
          {
            name: "participants",
            in: "query",
            description: "Participants of the Event to be changed",
            schema: {
              $ref: "#/definitions/Events",
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
            description: "Game Not Found",
          },
        },
      },
    },
    "/events/deleteEventById": {
      delete: {
        tags: ["Events"],
        summary: "Delete a event by ID",
        parameters: [
          {
            name: "eventId",
            in: "query",
            description: "ID of the event to be deleted",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Success Event deleted",
            schema: {
              $ref: "#/definitions/Events",
            },
          },
          404: {
            description: "EventID not found or invalid",
          },
          500: {
            description: "Error deleting event",
          },
        },
      },
    },
    "/events/deleteAllEvents": {
      delete: {
        tags: ["Events"],
        summary: "Delete all Events",
        responses: {
          200: {
            description: "Success",
            schema: {
              type: "string",
              example: "All events have been deleted",
            },
          },
          500: {
            description: "Error deleting events",
          },
        },
      },
    },

    //Swaggerdocs section for Games
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
    "/games/gameid": {
      get: {
        tags: ["Games"],
        summary: "Get event by id",
        parameters: [
          {
            name: "gameId",
            in: "query",
            description: "Id of the event",
            require: true,
            schema: {
              type: "integer",
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
          201: {
            description: "Created",
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
            name: "gameId",
            in: "query",
            description: "ID of the game to be updated",
            schema: {
              type: "integer",
              format: "int64",
            },
            required: true,
          },
          {
            name: "name",
            in: "query",
            description: "Name of the game to be changed",
            schema: {
              $ref: "#/definitions/Games",
            },
          },
          {
            name: "minPlayers",
            in: "query",
            description: "Minimum number of players to be changed",
            schema: {
              $ref: "#/definitions/Games",
            },
          },
          {
            name: "maxPlayers",
            in: "query",
            description: "Maximum number of players to be changed",
            schema: {
              $ref: "#/definitions/Games",
            },
          },
          {
            name: "priceMoney",
            in: "query",
            description: "Price money for the game to be changed",
            schema: {
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
            description: "Game Not Found",
          },
        },
      },
    },
    "/games/deleteGameById": {
      delete: {
        tags: ["Games"],
        summary: "Delete a game by ID",
        parameters: [
          {
            name: "gameId",
            in: "query",
            description: "ID of the game to be deleted",
            required: true,
            schema: {
              type: "string",
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
            description: "GameID not found or invalid",
          },
          500: {
            description: "Error deleting game",
          },
        },
      },
    },
    "/games/deleteAllGames": {
      delete: {
        tags: ["Games"],
        summary: "Delete all games",
        responses: {
          200: {
            description: "Success",
            schema: {
              type: "string",
              example: "All games have been deleted",
            },
          },
          500: {
            description: "Error deleting games",
          },
        },
      },
    },

    // Swaggerdocs section for participants
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
    "/participants/participantid": {
      get: {
        tags: ["Participants"],
        summary: "Get Participant by id",
        parameters: [
          {
            name: "participantId",
            in: "query",
            description: "Id of one Participant",
            require: true,
            schema: {
              type: "integer",
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
    "/participants/patch": {
      patch: {
        tags: ["Participants"],
        summary: "Update participant details",
        parameters: [
          {
            name: "participantId",
            in: "query",
            description: "Matched ID of the participant to be updated",
            schema: {
              type: "integer",
              format: "int64",
            },
            required: true,
          },
          {
            name: "firstName",
            in: "query",
            description: "First Name of the participant to be changed",
            schema: {
              $ref: "#/definitions/Participants",
            },
          },
          {
            name: "lastName",
            in: "query",
            description: "Last Name of the participant to be changed",
            schema: {
              $ref: "#/definitions/Participants",
            },
          },
          {
            name: "gamerTag",
            in: "query",
            description: "Gamer Tag of the participant to be changed",
            schema: {
              $ref: "#/definitions/Participants",
            },
          },
          {
            name: "seatNumber",
            in: "query",
            description: "Seat Numer for the participant to be changed",
            schema: {
              $ref: "#/definitions/Participants",
            },
          },
        ],
        responses: {
          200: {
            description: "Updated Participant",
            schema: {
              $ref: "#/definitions/Participants",
            },
          },
          404: {
            description: "Participant Not Found",
          },
        },
      },
    },
    "/participants/deleteParticipantById": {
      delete: {
        tags: ["Participants"],
        summary: "Delete a participant by ID",
        parameters: [
          {
            name: "participantId",
            in: "query",
            description: "ID of the participant to be deleted",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Success deleted participant by ID",
            schema: {
              $ref: "#/definitions/Participants",
            },
          },
          404: {
            description: "ParticipantID not found or invalid",
          },
          500: {
            description: "Error deleting participant",
          },
        },
      },
    },
    "/participants/deleteAllParticipants": {
      delete: {
        tags: ["Participants"],
        summary: "Delete all participants",
        responses: {
          200: {
            description: "Success",
            schema: {
              type: "string",
              example: "All participants have been deleted",
            },
          },
          500: {
            description: "Error deleting participants",
          },
        },
      },
    },
  },
  //Defining the schema for the API documentation
  definitions: {
    //Defining the schema for the events
    Events: {
      type: "object",
      properties: {
        eventId: {
          type: "integer",
          minimum: 1,
        },
        name: {
          type: "string",
        },
        location: {
          type: "string",
        },
        startDate: {
          type: "string",
          format: "date",
        },
        endDate: {
          type: "string",
          format: "date",
        },
        entry: {
          type: "string",
          format: "time",
        },
        start: {
          type: "string",
          format: "time",
        },
        end: {
          type: "string",
          format: "time",
        },
        participants: {
          type: "integer",
        },
      },
    },
    //Defining the schema for the games
    Games: {
      type: "object",
      properties: {
        gameId: {
          type: "integer",
          minimum: 1,
        },
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
    //Defining the schema for the participants
    Participants: {
      type: "object",
      properties: {
        participantId: {
          type: "integer",
          minimum: 1,
        },
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
