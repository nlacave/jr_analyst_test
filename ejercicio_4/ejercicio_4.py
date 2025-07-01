import pandas as pd
from io import StringIO

visitas_web = """usuario_id,pagina,timestamp
1001,/home,2024-06-01 10:01:00
1002,/producto/23,2024-06-01 10:03:15
1001,/carrito,2024-06-01 10:05:00
1003,/home,2024-06-01 10:06:45
1002,/checkout,2024-06-01 10:07:20"""

csv_virtual = StringIO(visitas_web)

df = pd.read_csv(csv_virtual)
print('Dataframe de Visitas Web:')
print(df)

filtro_x_producto = df[df['pagina'].str.contains('producto')]
print('\nFiltro por palabra "producto":')
print(filtro_x_producto)

visitas_x_usuario = df.groupby('usuario_id').size().rename('visitas').to_frame()
print('\nCantidad de visitas por usuario:')
print(visitas_x_usuario)

visitas_mayor_a_menor = visitas_x_usuario.sort_values('visitas', ascending=False)
print('\nResultados ordenados por cantidad de visitas (de mayor a menor):')
print(visitas_mayor_a_menor)

df['timestamp'] = pd.to_datetime(df['timestamp'])
filtro_x_horario = df[df['timestamp'].dt.time > pd.to_datetime('10:05:00').time()]
print('\nFiltro por visitas realizas después de las 10:05:00')
print(filtro_x_horario)