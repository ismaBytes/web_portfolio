// Middleware temporarily disabled to use URL-based detection
import { defineMiddleware } from "astro:middleware";
export const onRequest = defineMiddleware((context, next) => {
  return next();
});
