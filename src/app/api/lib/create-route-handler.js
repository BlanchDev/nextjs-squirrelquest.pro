import { NextResponse } from "next/server";

export function createRouteHandler(expressHandler, path, cacheTime = 0) {
  return async function handler(request) {
    try {
      const response = await processRequest(request, expressHandler, path);

      if (cacheTime > 0) {
        // Cache On
        response.headers.set("Cache-Control", `public, max-age=${cacheTime}`);
      } else {
        // Cache Off
        response.headers.set(
          "Cache-Control",
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        );
        response.headers.set("Pragma", "no-cache");
        response.headers.set("Expires", "0");
      }

      return response;
    } catch (error) {
      return handleErrorResponse(error);
    }
  };
}

async function processRequest(request, expressHandler, path) {
  return new Promise((resolve) => {
    const mockReq = buildMockRequest(request, path);
    const mockRes = buildMockResponse(resolve);

    expressHandler(mockReq, mockRes, (error) => {
      if (error) {
        resolve(handleErrorResponse(error));
      }
    });
  });
}

function buildMockRequest(request, path) {
  return {
    method: request.method,
    path,
    url: path,
    headers: Object.fromEntries(request.headers),
  };
}

function buildMockResponse(resolve) {
  return {
    json: (data) => resolve(NextResponse.json(data)),
    status: (code) => ({
      json: (data) => resolve(NextResponse.json(data, { status: code })),
    }),
    setHeader: () => this,
    getHeader: () => {},
    set: () => this,
    get: () => {},
    end: (data) => resolve(new NextResponse(data)),
    write: () => true,
    writeHead: () => this,
  };
}

function handleErrorResponse(error) {
  return NextResponse.json({ error: error.message }, { status: 500 });
}
