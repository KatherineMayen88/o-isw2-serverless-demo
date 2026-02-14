/*export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`
  });
}*/

/*
export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  if (nombre === "error") {
    return res.status(500).json({ error: "Falla simulada" });
  }
  
  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    longitud: nombre.length
  });
}*/


export default function handler(req, res) {
  const nombre = req.query.nombre ?? "";

  const normalizado = String(nombre).trim();
  const finalNombre = normalizado === "" ? "anónimo" : normalizado;

  const payload = {
    resultado: `Nombre procesado: ${finalNombre.toUpperCase()}`,
    longitud: finalNombre.length
  };

  return res.status(200).json(payload);
}



