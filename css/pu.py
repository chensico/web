import matplotlib as mpl 
import matplotlib.pyplot as plt 
# 2.创建figure画布对象 
figure = plt.figure() 
# 3.获取对应位置的axes坐标系对象 
axes1 = figure.add_subplot(2,1,1) 
axes2 = figure.add_subplot(2,1,2) 
# 4.调用axes对象，进行对应位置的图形绘制 
axes1.plot([1,3,5,7],[4,9,6,8]) 
axes2.plot([1,2,4,5],[8,4,6,2]) 
# 5.显示图形 
figure.show() 