import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.details
        });
      }

      // Store the contact message
      const savedMessage = await storage.createContactMessage(result.data);
      
      return res.status(201).json({
        message: "Contact message received successfully",
        id: savedMessage.id
      });
      
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({
        message: "Failed to save contact message"
      });
    }
  });

  // Get all contact messages (for demonstration)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error("Error retrieving contact messages:", error);
      return res.status(500).json({
        message: "Failed to retrieve contact messages"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
