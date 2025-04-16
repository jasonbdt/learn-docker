# Datei: prog-examples/07-python-legacy/main.py
import matplotlib
matplotlib.use('Agg')

import numpy as np
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt
from datetime import datetime

plt.figure(figsize=(10.24, 7.68), dpi=100)

mp = Basemap(projection='merc', llcrnrlat=-80, urcrnrlat=80, llcrnrlon=-180, urcrnrlon=180, lat_ts=20, resolution='c')
mp.drawcoastlines()
mp.drawparallels(np.arange(-90, 90, 30), labels=[1, 0, 0, 0])
mp.drawmapboundary(fill_color='aqua')
mp.fillcontinents(color='coral', lake_color='aqua')

date = datetime.utcnow()
CS = mp.nightshade(date)

plt.title('Tag und Nacht am %s (UTC)' % date.strftime("%d %b %Y %H:%M:%S"))
plt.savefig('/src/out/tag_nacht.png')
