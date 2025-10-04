var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// node_modules/resend/dist/index.mjs
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value, "__defNormalProp");
var __spreadValues = /* @__PURE__ */ __name((a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
}, "__spreadValues");
var __spreadProps = /* @__PURE__ */ __name((a, b) => __defProps(a, __getOwnPropDescs(b)), "__spreadProps");
var __objRest = /* @__PURE__ */ __name((source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
}, "__objRest");
var __async = /* @__PURE__ */ __name((__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = /* @__PURE__ */ __name((value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }, "fulfilled");
    var rejected = /* @__PURE__ */ __name((value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }, "rejected");
    var step = /* @__PURE__ */ __name((x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected), "step");
    step((generator = generator.apply(__this, __arguments)).next());
  });
}, "__async");
var version = "6.1.2";
function buildPaginationQuery(options) {
  const searchParams = new URLSearchParams();
  if (options.limit !== void 0) {
    searchParams.set("limit", options.limit.toString());
  }
  if ("after" in options && options.after !== void 0) {
    searchParams.set("after", options.after);
  }
  if ("before" in options && options.before !== void 0) {
    searchParams.set("before", options.before);
  }
  return searchParams.toString();
}
__name(buildPaginationQuery, "buildPaginationQuery");
var ApiKeys = class {
  static {
    __name(this, "ApiKeys");
  }
  constructor(resend) {
    this.resend = resend;
  }
  create(_0) {
    return __async(this, arguments, function* (payload, options = {}) {
      const data = yield this.resend.post(
        "/api-keys",
        payload,
        options
      );
      return data;
    });
  }
  list() {
    return __async(this, arguments, function* (options = {}) {
      const queryString = buildPaginationQuery(options);
      const url = queryString ? `/api-keys?${queryString}` : "/api-keys";
      const data = yield this.resend.get(url);
      return data;
    });
  }
  remove(id) {
    return __async(this, null, function* () {
      const data = yield this.resend.delete(
        `/api-keys/${id}`
      );
      return data;
    });
  }
};
var Audiences = class {
  static {
    __name(this, "Audiences");
  }
  constructor(resend) {
    this.resend = resend;
  }
  create(_0) {
    return __async(this, arguments, function* (payload, options = {}) {
      const data = yield this.resend.post(
        "/audiences",
        payload,
        options
      );
      return data;
    });
  }
  list() {
    return __async(this, arguments, function* (options = {}) {
      const queryString = buildPaginationQuery(options);
      const url = queryString ? `/audiences?${queryString}` : "/audiences";
      const data = yield this.resend.get(url);
      return data;
    });
  }
  get(id) {
    return __async(this, null, function* () {
      const data = yield this.resend.get(
        `/audiences/${id}`
      );
      return data;
    });
  }
  remove(id) {
    return __async(this, null, function* () {
      const data = yield this.resend.delete(
        `/audiences/${id}`
      );
      return data;
    });
  }
};
function parseAttachments(attachments) {
  return attachments == null ? void 0 : attachments.map((attachment) => ({
    content: attachment.content,
    filename: attachment.filename,
    path: attachment.path,
    content_type: attachment.contentType,
    content_id: attachment.contentId
  }));
}
__name(parseAttachments, "parseAttachments");
function parseEmailToApiOptions(email) {
  return {
    attachments: parseAttachments(email.attachments),
    bcc: email.bcc,
    cc: email.cc,
    from: email.from,
    headers: email.headers,
    html: email.html,
    reply_to: email.replyTo,
    scheduled_at: email.scheduledAt,
    subject: email.subject,
    tags: email.tags,
    text: email.text,
    to: email.to
  };
}
__name(parseEmailToApiOptions, "parseEmailToApiOptions");
function render(node) {
  return new Promise((resolve, reject) => {
    import("@react-email/render").then(({ render: render2 }) => {
      resolve(render2(node));
    }).catch(() => {
      reject(
        Error(
          "Failed to render React component. Make sure to install `@react-email/render` or `@react-email/components`."
        )
      );
    });
  });
}
__name(render, "render");
var Batch = class {
  static {
    __name(this, "Batch");
  }
  constructor(resend) {
    this.resend = resend;
  }
  send(payload, options) {
    return __async(this, null, function* () {
      return this.create(payload, options);
    });
  }
  create(payload, options) {
    return __async(this, null, function* () {
      var _a;
      const emails = [];
      for (const email of payload) {
        if (email.react) {
          email.html = yield render(email.react);
          email.react = void 0;
        }
        emails.push(parseEmailToApiOptions(email));
      }
      const data = yield this.resend.post(
        "/emails/batch",
        emails,
        __spreadProps(__spreadValues({}, options), {
          headers: __spreadValues({
            "x-batch-validation": (_a = options == null ? void 0 : options.batchValidation) != null ? _a : "strict"
          }, options == null ? void 0 : options.headers)
        })
      );
      return data;
    });
  }
};
var Broadcasts = class {
  static {
    __name(this, "Broadcasts");
  }
  constructor(resend) {
    this.resend = resend;
  }
  create(_0) {
    return __async(this, arguments, function* (payload, options = {}) {
      if (payload.react) {
        payload.html = yield render(payload.react);
      }
      const data = yield this.resend.post(
        "/broadcasts",
        {
          name: payload.name,
          audience_id: payload.audienceId,
          preview_text: payload.previewText,
          from: payload.from,
          html: payload.html,
          reply_to: payload.replyTo,
          subject: payload.subject,
          text: payload.text
        },
        options
      );
      return data;
    });
  }
  send(id, payload) {
    return __async(this, null, function* () {
      const data = yield this.resend.post(
        `/broadcasts/${id}/send`,
        { scheduled_at: payload == null ? void 0 : payload.scheduledAt }
      );
      return data;
    });
  }
  list() {
    return __async(this, arguments, function* (options = {}) {
      const queryString = buildPaginationQuery(options);
      const url = queryString ? `/broadcasts?${queryString}` : "/broadcasts";
      const data = yield this.resend.get(url);
      return data;
    });
  }
  get(id) {
    return __async(this, null, function* () {
      const data = yield this.resend.get(
        `/broadcasts/${id}`
      );
      return data;
    });
  }
  remove(id) {
    return __async(this, null, function* () {
      const data = yield this.resend.delete(
        `/broadcasts/${id}`
      );
      return data;
    });
  }
  update(id, payload) {
    return __async(this, null, function* () {
      if (payload.react) {
        payload.html = yield render(payload.react);
      }
      const data = yield this.resend.patch(
        `/broadcasts/${id}`,
        {
          name: payload.name,
          audience_id: payload.audienceId,
          from: payload.from,
          html: payload.html,
          text: payload.text,
          subject: payload.subject,
          reply_to: payload.replyTo,
          preview_text: payload.previewText
        }
      );
      return data;
    });
  }
};
var Contacts = class {
  static {
    __name(this, "Contacts");
  }
  constructor(resend) {
    this.resend = resend;
  }
  create(_0) {
    return __async(this, arguments, function* (payload, options = {}) {
      const data = yield this.resend.post(
        `/audiences/${payload.audienceId}/contacts`,
        {
          unsubscribed: payload.unsubscribed,
          email: payload.email,
          first_name: payload.firstName,
          last_name: payload.lastName
        },
        options
      );
      return data;
    });
  }
  list(options) {
    return __async(this, null, function* () {
      const _a = options, { audienceId } = _a, paginationOptions = __objRest(_a, ["audienceId"]);
      const queryString = buildPaginationQuery(paginationOptions);
      const url = queryString ? `/audiences/${audienceId}/contacts?${queryString}` : `/audiences/${audienceId}/contacts`;
      const data = yield this.resend.get(url);
      return data;
    });
  }
  get(options) {
    return __async(this, null, function* () {
      if (!options.id && !options.email) {
        return {
          data: null,
          error: {
            message: "Missing `id` or `email` field.",
            name: "missing_required_field"
          }
        };
      }
      const data = yield this.resend.get(
        `/audiences/${options.audienceId}/contacts/${(options == null ? void 0 : options.email) ? options == null ? void 0 : options.email : options == null ? void 0 : options.id}`
      );
      return data;
    });
  }
  update(options) {
    return __async(this, null, function* () {
      if (!options.id && !options.email) {
        return {
          data: null,
          error: {
            message: "Missing `id` or `email` field.",
            name: "missing_required_field"
          }
        };
      }
      const data = yield this.resend.patch(
        `/audiences/${options.audienceId}/contacts/${(options == null ? void 0 : options.email) ? options == null ? void 0 : options.email : options == null ? void 0 : options.id}`,
        {
          unsubscribed: options.unsubscribed,
          first_name: options.firstName,
          last_name: options.lastName
        }
      );
      return data;
    });
  }
  remove(payload) {
    return __async(this, null, function* () {
      if (!payload.id && !payload.email) {
        return {
          data: null,
          error: {
            message: "Missing `id` or `email` field.",
            name: "missing_required_field"
          }
        };
      }
      const data = yield this.resend.delete(
        `/audiences/${payload.audienceId}/contacts/${(payload == null ? void 0 : payload.email) ? payload == null ? void 0 : payload.email : payload == null ? void 0 : payload.id}`
      );
      return data;
    });
  }
};
function parseDomainToApiOptions(domain) {
  return {
    name: domain.name,
    region: domain.region,
    custom_return_path: domain.customReturnPath
  };
}
__name(parseDomainToApiOptions, "parseDomainToApiOptions");
var Domains = class {
  static {
    __name(this, "Domains");
  }
  constructor(resend) {
    this.resend = resend;
  }
  create(_0) {
    return __async(this, arguments, function* (payload, options = {}) {
      const data = yield this.resend.post(
        "/domains",
        parseDomainToApiOptions(payload),
        options
      );
      return data;
    });
  }
  list() {
    return __async(this, arguments, function* (options = {}) {
      const queryString = buildPaginationQuery(options);
      const url = queryString ? `/domains?${queryString}` : "/domains";
      const data = yield this.resend.get(url);
      return data;
    });
  }
  get(id) {
    return __async(this, null, function* () {
      const data = yield this.resend.get(
        `/domains/${id}`
      );
      return data;
    });
  }
  update(payload) {
    return __async(this, null, function* () {
      const data = yield this.resend.patch(
        `/domains/${payload.id}`,
        {
          click_tracking: payload.clickTracking,
          open_tracking: payload.openTracking,
          tls: payload.tls
        }
      );
      return data;
    });
  }
  remove(id) {
    return __async(this, null, function* () {
      const data = yield this.resend.delete(
        `/domains/${id}`
      );
      return data;
    });
  }
  verify(id) {
    return __async(this, null, function* () {
      const data = yield this.resend.post(
        `/domains/${id}/verify`
      );
      return data;
    });
  }
};
var Emails = class {
  static {
    __name(this, "Emails");
  }
  constructor(resend) {
    this.resend = resend;
  }
  send(_0) {
    return __async(this, arguments, function* (payload, options = {}) {
      return this.create(payload, options);
    });
  }
  create(_0) {
    return __async(this, arguments, function* (payload, options = {}) {
      if (payload.react) {
        payload.html = yield render(payload.react);
      }
      const data = yield this.resend.post(
        "/emails",
        parseEmailToApiOptions(payload),
        options
      );
      return data;
    });
  }
  get(id) {
    return __async(this, null, function* () {
      const data = yield this.resend.get(
        `/emails/${id}`
      );
      return data;
    });
  }
  list() {
    return __async(this, arguments, function* (options = {}) {
      const queryString = buildPaginationQuery(options);
      const url = queryString ? `/emails?${queryString}` : "/emails";
      const data = yield this.resend.get(url);
      return data;
    });
  }
  update(payload) {
    return __async(this, null, function* () {
      const data = yield this.resend.patch(
        `/emails/${payload.id}`,
        {
          scheduled_at: payload.scheduledAt
        }
      );
      return data;
    });
  }
  cancel(id) {
    return __async(this, null, function* () {
      const data = yield this.resend.post(
        `/emails/${id}/cancel`
      );
      return data;
    });
  }
};
var defaultBaseUrl = "https://api.resend.com";
var defaultUserAgent = `resend-node:${version}`;
var baseUrl = typeof process !== "undefined" && process.env ? process.env.RESEND_BASE_URL || defaultBaseUrl : defaultBaseUrl;
var userAgent = typeof process !== "undefined" && process.env ? process.env.RESEND_USER_AGENT || defaultUserAgent : defaultUserAgent;
var Resend = class {
  static {
    __name(this, "Resend");
  }
  constructor(key) {
    this.key = key;
    this.apiKeys = new ApiKeys(this);
    this.audiences = new Audiences(this);
    this.batch = new Batch(this);
    this.broadcasts = new Broadcasts(this);
    this.contacts = new Contacts(this);
    this.domains = new Domains(this);
    this.emails = new Emails(this);
    if (!key) {
      if (typeof process !== "undefined" && process.env) {
        this.key = process.env.RESEND_API_KEY;
      }
      if (!this.key) {
        throw new Error(
          'Missing API key. Pass it to the constructor `new Resend("re_123")`'
        );
      }
    }
    this.headers = new Headers({
      Authorization: `Bearer ${this.key}`,
      "User-Agent": userAgent,
      "Content-Type": "application/json"
    });
  }
  fetchRequest(_0) {
    return __async(this, arguments, function* (path, options = {}) {
      try {
        const response = yield fetch(`${baseUrl}${path}`, options);
        if (!response.ok) {
          try {
            const rawError = yield response.text();
            return { data: null, error: JSON.parse(rawError) };
          } catch (err) {
            if (err instanceof SyntaxError) {
              return {
                data: null,
                error: {
                  name: "application_error",
                  message: "Internal server error. We are unable to process your request right now, please try again later."
                }
              };
            }
            const error = {
              message: response.statusText,
              name: "application_error"
            };
            if (err instanceof Error) {
              return { data: null, error: __spreadProps(__spreadValues({}, error), { message: err.message }) };
            }
            return { data: null, error };
          }
        }
        const data = yield response.json();
        return { data, error: null };
      } catch (e) {
        return {
          data: null,
          error: {
            name: "application_error",
            message: "Unable to fetch data. The request could not be resolved."
          }
        };
      }
    });
  }
  post(_0, _1) {
    return __async(this, arguments, function* (path, entity, options = {}) {
      const headers = new Headers(this.headers);
      if (options.headers) {
        for (const [key, value] of new Headers(options.headers).entries()) {
          headers.set(key, value);
        }
      }
      if (options.idempotencyKey) {
        headers.set("Idempotency-Key", options.idempotencyKey);
      }
      const requestOptions = __spreadProps(__spreadValues({
        method: "POST",
        body: JSON.stringify(entity)
      }, options), {
        headers
      });
      return this.fetchRequest(path, requestOptions);
    });
  }
  get(_0) {
    return __async(this, arguments, function* (path, options = {}) {
      const headers = new Headers(this.headers);
      if (options.headers) {
        for (const [key, value] of new Headers(options.headers).entries()) {
          headers.set(key, value);
        }
      }
      const requestOptions = __spreadProps(__spreadValues({
        method: "GET"
      }, options), {
        headers
      });
      return this.fetchRequest(path, requestOptions);
    });
  }
  put(_0, _1) {
    return __async(this, arguments, function* (path, entity, options = {}) {
      const headers = new Headers(this.headers);
      if (options.headers) {
        for (const [key, value] of new Headers(options.headers).entries()) {
          headers.set(key, value);
        }
      }
      const requestOptions = __spreadProps(__spreadValues({
        method: "PUT",
        body: JSON.stringify(entity)
      }, options), {
        headers
      });
      return this.fetchRequest(path, requestOptions);
    });
  }
  patch(_0, _1) {
    return __async(this, arguments, function* (path, entity, options = {}) {
      const headers = new Headers(this.headers);
      if (options.headers) {
        for (const [key, value] of new Headers(options.headers).entries()) {
          headers.set(key, value);
        }
      }
      const requestOptions = __spreadProps(__spreadValues({
        method: "PATCH",
        body: JSON.stringify(entity)
      }, options), {
        headers
      });
      return this.fetchRequest(path, requestOptions);
    });
  }
  delete(path, query) {
    return __async(this, null, function* () {
      const requestOptions = {
        method: "DELETE",
        body: JSON.stringify(query),
        headers: this.headers
      };
      return this.fetchRequest(path, requestOptions);
    });
  }
};

// worker/index.ts
var corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};
async function handleContactSubmission(data, env) {
  if (!data.name || !data.email || !data.message) {
    return new Response(
      JSON.stringify({ success: false, error: "Name, email, and message are required" }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return new Response(
      JSON.stringify({ success: false, error: "Invalid email address" }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
  if (!data.captchaToken) {
    return new Response(
      JSON.stringify({ success: false, error: "CAPTCHA verification required" }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
  if (!env.TURNSTILE_SECRET_KEY) {
    console.error("TURNSTILE_SECRET_KEY not configured");
    return new Response(
      JSON.stringify({ success: false, error: "Server configuration error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
  const turnstileResponse = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: data.captchaToken
      })
    }
  );
  const turnstileResult = await turnstileResponse.json();
  if (!turnstileResult.success) {
    console.error("Turnstile verification failed:", turnstileResult);
    return new Response(
      JSON.stringify({
        success: false,
        error: "CAPTCHA verification failed",
        details: turnstileResult["error-codes"] || []
      }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
  if (!env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY not configured");
    return new Response(
      JSON.stringify({ success: false, error: "Server configuration error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
  const resend = new Resend(env.RESEND_API_KEY);
  try {
    const emailResult = await resend.emails.send({
      from: "United Acquisitions Contact Form <noreply@notifications.unitedacq.com>",
      to: ["info@unitedacq.com"],
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2A5F9E; border-bottom: 2px solid #E5C93C; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2A5F9E; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            ${data.phone ? `<p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ""}
            ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
          </div>

          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #2A5F9E; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #E6EBF2; border-radius: 8px; font-size: 12px; color: #666;">
            <p style="margin: 0;"><strong>Submission Details:</strong></p>
            <p style="margin: 5px 0 0 0;">Time: ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
            <p style="margin: 5px 0 0 0;">CAPTCHA Verified: \u2713</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ""}
${data.company ? `Company: ${data.company}` : ""}

Message:
${data.message}

Submitted: ${(/* @__PURE__ */ new Date()).toLocaleString()}
      `
    });
    return new Response(
      JSON.stringify({ success: true, data: emailResult }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred"
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
}
__name(handleContactSubmission, "handleContactSubmission");
var index_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders
      });
    }
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const data = await request.json();
        return await handleContactSubmission(data, env);
      } catch (error) {
        console.error("Error processing contact form:", error);
        return new Response(
          JSON.stringify({
            success: false,
            error: error instanceof Error ? error.message : "Unknown error occurred"
          }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          }
        );
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
