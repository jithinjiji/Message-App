import { checkSchema } from "express-validator";

const messageValidator = {
  validateGetMessageRequest: () => checkSchema({
    userId: {
      in: ["query"],
      exists: {
        options: {
          checkNull: true,
          checkFalsy: true
        }
      }
    }
  }),

  validateSendMessageRequest: () => checkSchema({
    userId: {
      in: ["body"],
      exists: {
        options: {
          checkNull: true,
          checkFalsy: true
        }
      }
    },
    message: {
      in: ["body"],
      exists: {
        options: {
          checkNull: true,
          checkFalsy: true
        }
      }
    },
    to: {
      in: ["body"],
      exists: {
        options: {
          checkNull: true,
          checkFalsy: true
        }
      }
    }
  })
};

export default messageValidator;