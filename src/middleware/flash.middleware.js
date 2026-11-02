export default function flash() {
  return (req, res, next) => {
    req.flash = function (type, message) {
      if (!req.session) {
        throw new Error("Flash messages require session middleware.");
      }

      if (type && arguments.length > 1) {
        const messages = (req.session.flash ??= {});
        const values = Array.isArray(message) ? message : [message];
        messages[type] ??= [];
        messages[type].push(...values);
        return messages[type].length;
      }

      const messages = req.session.flash ?? {};
      if (type) {
        const stored = messages[type] ?? [];
        delete messages[type];
        if (Object.keys(messages).length === 0) delete req.session.flash;
        return stored;
      }

      delete req.session.flash;
      return messages;
    };

    next();
  };
}
