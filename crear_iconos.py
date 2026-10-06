from pathlib import Path
from PIL import Image, ImageDraw

carpeta = Path("icons")
carpeta.mkdir(exist_ok=True)

def crear_icono(tamano, nombre):
    imagen = Image.new("RGB", (tamano, tamano), "#6D3B5E")
    dibujo = ImageDraw.Draw(imagen)

    margen = int(tamano * 0.12)
    dibujo.rounded_rectangle(
        [margen, margen, tamano - margen, tamano - margen],
        radius=int(tamano * 0.18),
        fill="#F7F2EC"
    )

    centro = tamano // 2
    radio = int(tamano * 0.16)

    dibujo.ellipse(
        [centro - radio, int(tamano * 0.30) - radio,
         centro + radio, int(tamano * 0.30) + radio],
        fill="#E8875A"
    )

    dibujo.rounded_rectangle(
        [int(tamano * 0.30), int(tamano * 0.52),
         int(tamano * 0.70), int(tamano * 0.60)],
        radius=int(tamano * 0.03),
        fill="#6D3B5E"
    )

    ruta = carpeta / nombre
    imagen.save(ruta, "PNG")
    print(f"Icono creado: {ruta}")

crear_icono(192, "icon-192.png")
crear_icono(512, "icon-512.png")
crear_icono(180, "apple-touch-icon.png")