const router = require("express").Router();

const helper = require("./helper");
const restricted = require("../auth/restricted-middleware");

router.get("/", (req, res) => {
  helper
    .find("users")
    .then((rez) => res.status(200).json(rez))
    .catch((err) => res.status(500).json({ status: 500, err }));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  helper
    .findById(id, "users")
    .then((rez) => res.status(200).json(rez))
    .catch((err) => res.status(500).json({ status: 500, err }));
});

router.post("/", (req, res) => {
  helper
    .add(req.body, "users")
    .then((rez) => res.status(200).json(rez))
    .catch((err) => res.status(500).json({ status: 500, err }));
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  helper
    .update(req.body, id, "users")
    .then((rez) => res.status(200).json(rez))
    .catch((err) => res.status(500).json({ status: 500, err }));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  helper
    .remove(id, "users")
    .then((rez) => res.status(200).json(rez))
    .catch((err) => res.status(500).json({ status: 500, err }));
});

function checkRole(role) {
  return (req, res, next) => {
    if (req.jwt.role === role) {
      next();
    } else {
      res.status(403).json({ message: "You are not authorized" });
    }
  };
}

module.exports = router;
