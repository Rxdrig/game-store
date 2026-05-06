const { users, addUser } = require('../data/memoryStore');

function register(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Email y password son obligatorios.',
    });
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const alreadyExists = users.some((user) => user.email === normalizedEmail);

  if (alreadyExists) {
    return res.status(409).json({
      message: 'El usuario ya existe.',
    });
  }

  const newUser = {
    id: users.length + 1,
    email: normalizedEmail,
    password: String(password),
    createdAt: new Date().toISOString(),
  };

  addUser(newUser);

  return res.status(201).json({
    message: 'Usuario registrado correctamente.',
    user: {
      id: newUser.id,
      email: newUser.email,
    },
  });
}

function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Email y password son obligatorios.',
    });
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const user = users.find((item) => item.email === normalizedEmail);

  if (!user || user.password !== String(password)) {
    return res.status(401).json({
      message: 'Credenciales inválidas.',
    });
  }

  return res.status(200).json({
    message: 'Login exitoso.',
    user: {
      id: user.id,
      email: user.email,
    },
  });
}

module.exports = {
  register,
  login,
};
