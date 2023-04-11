import { checkSchema } from "express-validator";
import config from "../../config";

const messageValidator = {
  validateGetMessageRequest: () => checkSchema({
    userId: {
      in: ["query"],
      exists: {
        errorMessage: `userId: ${config.constants.Messages.VALIDATION_REQUIRED}`,
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
        errorMessage: `userId: ${config.constants.Messages.VALIDATION_REQUIRED}`,
        options: {
          checkNull: true,
          checkFalsy: true
        }
      }
    },
    message: {
      in: ["body"],
      exists: {
        errorMessage: `message: ${config.constants.Messages.VALIDATION_REQUIRED}`,
        options: {
          checkNull: true,
          checkFalsy: true
        }
      }
    },
    to: {
      in: ["body"],
      isArray: {
        errorMessage: `to: ${config.constants.Messages.VALIDATION_INTEGER_ARRAY}`
      },
      exists: {
        errorMessage: `to: ${config.constants.Messages.VALIDATION_REQUIRED}`,
        options: {
          checkNull: true,
          checkFalsy: true
        }
      }
    }
  })
};

export default messageValidator;