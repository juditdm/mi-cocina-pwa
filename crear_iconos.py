from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw


carpeta = Path("icons")
carpeta.mkdir(exist_ok=True)


def punto_bezier(p0, p1, p2, p3, t):
    x = (
        (1 - t) ** 3 * p0[0]
        + 3 * (1 - t) ** 2 * t * p1[0]
        + 3 * (1 - t) * t ** 2 * p2[0]
        + t ** 3 * p3[0]
    )

    y = (
        (1 - t) ** 3 * p0[1]
        + 3 * (1 - t) ** 2 * t * p1[1]
        + 3 * (1 - t) * t ** 2 * p2[1]
        + t ** 3 * p3[1]
    )

    return (x, y)


def gradiente(size, color_inicio, color_fin, x0, y0, x1, y1):
    ancho, alto = size

    xx, yy = np.meshgrid(
        np.arange(ancho, dtype=np.float64),
        np.arange(alto, dtype=np.float64)
    )

    dx = x1 - x0
    dy = y1 - y0

    t = ((xx - x0) * dx + (yy - y0) * dy) / (dx * dx + dy * dy)
    t = np.clip(t, 0, 1)

    datos = np.zeros((alto, ancho, 3), dtype=np.uint8)

    for canal in range(3):
        datos[..., canal] = (
            color_inicio[canal] * (1 - t)
            + color_fin[canal] * t
        ).astype(np.uint8)

    return Image.fromarray(datos, "RGB")


def crear_icono(tamano, nombre, supersample=4):
    S = tamano * supersample
    escala = S / 512

    # Fondo con degradado diagonal
    imagen = gradiente(
        (S, S),
        (0x1F, 0x18, 0x26),
        (0x15, 0x10, 0x19),
        0, 0, S, S
    ).convert("RGBA")

    mascara = Image.new("L", (S, S), 0)
    ImageDraw.Draw(mascara).rounded_rectangle(
        [0, 0, S - 1, S - 1],
        radius=int(112 * escala),
        fill=255
    )

    fondo = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    fondo.paste(imagen, (0, 0), mascara)
    imagen = fondo
    dibujo = ImageDraw.Draw(imagen)

    # Círculo naranja con degradado
    circulo = gradiente(
        (S, S),
        (0xFF, 0xB2, 0x7A),
        (0xF0, 0x9A, 0x63),
        80 * escala, 80 * escala,
        432 * escala, 432 * escala
    ).convert("RGBA")

    mascara_circulo = Image.new("L", (S, S), 0)
    ImageDraw.Draw(mascara_circulo).ellipse(
        [80 * escala, 80 * escala, 432 * escala, 432 * escala],
        fill=255
    )

    imagen.paste(circulo, (0, 0), mascara_circulo)
    dibujo = ImageDraw.Draw(imagen)

    # Cuenco blanco, igual que el path del SVG
    puntos = [
        (150 * escala, 262 * escala),
        (362 * escala, 262 * escala)
    ]

    puntos += [
        punto_bezier(
            (362 * escala, 262 * escala),
            (362 * escala, 320 * escala),
            (315 * escala, 367 * escala),
            (257 * escala, 367 * escala),
            t / 200
        )
        for t in range(1, 201)
    ]

    puntos.append((255 * escala, 367 * escala))

    puntos += [
        punto_bezier(
            (255 * escala, 367 * escala),
            (197 * escala, 367 * escala),
            (150 * escala, 320 * escala),
            (150 * escala, 262 * escala),
            t / 200
        )
        for t in range(1, 201)
    ]

    dibujo.polygon(puntos, fill="#FFFFFF")

    # Borde superior del cuenco
    dibujo.rounded_rectangle(
        [
            138 * escala,
            252 * escala,
            374 * escala,
            274 * escala
        ],
        radius=11 * escala,
        fill="#FFFFFF"
    )

    # Vapor: tres curvas Bézier como en el SVG
    grosor = max(2, round(16 * escala))

    for x_base in [206, 256, 306]:
        p0 = (x_base * escala, 214 * escala)
        p1 = (x_base * escala, 200 * escala)
        p2 = ((x_base + 12) * escala, 196 * escala)
        p3 = ((x_base + 12) * escala, 182 * escala)

        puntos_vapor = [
            punto_bezier(p0, p1, p2, p3, t / 100)
            for t in range(101)
        ]

        p0 = puntos_vapor[-1]
        p1 = ((x_base + 12) * escala, 168 * escala)
        p2 = (x_base * escala, 164 * escala)
        p3 = (x_base * escala, 150 * escala)

        puntos_vapor += [
            punto_bezier(p0, p1, p2, p3, t / 100)
            for t in range(1, 101)
        ]

        dibujo.line(
            puntos_vapor,
            fill="#FFFFFF",
            width=grosor,
            joint="curve"
        )

        for punto in (puntos_vapor[0], puntos_vapor[-1]):
            dibujo.ellipse(
                [
                    punto[0] - grosor / 2,
                    punto[1] - grosor / 2,
                    punto[0] + grosor / 2,
                    punto[1] + grosor / 2
                ],
                fill="#FFFFFF"
            )

    imagen = imagen.resize((tamano, tamano), Image.LANCZOS)

    ruta = carpeta / nombre
    imagen.save(ruta, "PNG")
    print(f"Icono creado: {ruta}")


crear_icono(192, "icon-192.png")
crear_icono(512, "icon-512.png")
crear_icono(180, "apple-touch-icon.png")