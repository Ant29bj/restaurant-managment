import csv
import psycopg2


def cargar_datos(ruta):
    data = []
    with open(ruta) as contenido:
        reader = csv.reader(contenido)
        for row in reader:
            data.append(row)

    return data


if __name__ == "__main__":
    ruta = "Estados.csv"
    data = cargar_datos(ruta)
    data.pop()
    conn = psycopg2.connect(
        database="restaurant", host="localhost", user="postgres", password="saulp123", port="5432"
    )
    cursor = conn.cursor()

    args = ",".join(
        cursor.mogrify("(%s)", i).decode("utf-8")
        for i in data
    )

    cursor.execute(
        "INSERT INTO estados (descripcion) VALUES"
        + (args)
    )

    conn.commit()

    conn.close()
