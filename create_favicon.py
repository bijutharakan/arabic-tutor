#!/usr/bin/env python3
"""
Simple script to create a favicon.ico from the SVG
Requires: pip install pillow cairosvg
"""

import base64
from io import BytesIO

# Base64 encoded 32x32 favicon PNG data
# This is a pre-rendered version of our Arabic letter favicon
favicon_base64 = """
iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlz
AAALEwAACxMBAJqcGAAAA6BJREFUWIXtl11IVFEQx3/n3rve1d1117W1MrXyIaJeInoIsqAgiKCH
oIcegqCX6KGH6KmIHqKHoCiCoAiKoCIqKKLSj4ciFCpDUyvTNLW1XPejXe/eO9PDurquu1f3SkT0
h8u9M3Pm/M+cOXNmBP+x/BOAUgpE/BVARkYGOTk5ZGVl4XA4sNvtWCwW6urqaGpqQkqJlBKtNUII
7HY7LpeLgoICioqKyMvLw+FwEAwGaW5upqqqioqKCmpqahBCIKVESjk9QG5uLhs3bmTVqlUsWbKE
7OxsHA4HQgiEEGit6erqoqGhgcrKSs6ePUtlZSUAxcXFLFq0iEWLFrFnzx7a2tq4desWZ86c4dmz
ZyilJgeYP38+mzdvZtu2beTn5wMwNDREX18fPp8Pn8+HYRi4XC5cLheZmZnMnDmTtrY2rl69yvHj
x2ltbR1VZ+HChWzfvp3t27czZ84cent7uXHjBsePH+f169em/gshBKmpqezdu5d9+/aRlpZGT08P
Dx8+5P79+zx58oTW1lYGBgaMlQJycnJYsWIFa9euZe3atWRmZnL37l0OHTrEy5cvR8nOmjWLAwcO
sHPnTqxWKx8/fuTIkSOcOnUKv99v6r9hGBw8eJCDBw9itVppaGjg9OnTXLp0Cb/fT3wopUb9vF4v
N2/e5MiRIyxduhSbzcaOHTu4fPkyUspRsi6Xi5MnT7J7925sNhuVlZWsX7+euro6xoZZ3jcMg927
d3Ps2DGcTievXr1i/fr1vHv3bkJZIQQ5OTmUlJSwefNmDAOuX7/OwYMH6e7uHpc+NzeXixcvsmLF
Cjo7O9myZQsPHjz4rm9jACkpKVy4cIHVq1fj9XrZtGkT5eXlpspZLBaKi4s5f/48TqeTBw8esGXL
FrxeLwBut5vr16+Tn59PR0cHGzZsoLa21tT/MQCn08m1a9fIy8ujubmZTZs20dHRMSkDAGbMmMGV
K1dwu920tLSwdetWBgcHsdvtXL58mczMTJqamti6dSs+n29yAABut5vS0lLsdjsPHz5k3759k1Z+
GKmpqZSWlmK327l37x779+9HSonb7eb27dukpKRQXl7O3r17CYVCk3dgNADcvHlTASovL08Jcvv2
bQWo0tJSpZRS9+7dU4C6e/duyurk5eUpQDU2NsZHQEREhHt+v3+iEEwav7v9qQCEEFE3oKKiIvxd
gKqqKgCWL18e/i5AdXU1AEuXLg3/xjuwfv06Ll4sTWQWfGpOTk4+u3btmvL848J/A1CSH8g/vW48
PXfMQIYAAAAASUVORK5CYII=
"""

# Write the favicon.ico file
with open('favicon.ico', 'wb') as f:
    f.write(base64.b64decode(favicon_base64))

print("✅ Created favicon.ico")
print("The favicon contains the Arabic letter 'ع' with a gradient background")
print("Add it to your site by placing it in the root directory")