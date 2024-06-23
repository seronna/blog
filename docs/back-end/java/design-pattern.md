## 简单工厂模式
> 简单工厂模式（Simple Factory Pattern）是工厂模式家族中最简单的一种，它定义了一个工厂类，用来创建一系列相关或相互依赖的对象。

::: info 实例说明

某软件公司要基于Java语言开发一套图表库，该图表库可以为 应用系统提供多种不同外观的图表，例如柱状图( HistogramChart)、饼状图(PieChart)、折线图(LineChart)等。该软件公司图表库设计人员希望为应用系统开发人员提供一套灵活易用的图表库，通过设置不同的参数即可得到不同类型的图表，而且可以较为方便地对图表库进行扩展，以便能够在将来增加一些新类型的图表。
现使用简单工厂模式来设计该图表库。

:::

###### 抽象图表接口
```Java
public interface Chart {
    public void display();
}
```

###### 柱状图类
```Java
public class HistogramChart implements Chart {

    public HistogramChart() {
        System.out.println("创建柱状图");
    }


    @Override
    public void display() {
        System.out.println("显示柱状图");
    }
}
```

###### 饼状图类
```Java
public class PieChart implements Chart {

    public PieChart() {
        System.out.println("创建饼状图");
    }

    @Override
    public void display() {
        System.out.println("显示饼状图");
    }
}
```

###### 图表工厂类
```Java
public class ChartFactory {
    public static Chart getChart(String type){
        Chart chart = null;
        if ("pie".equals(type)){
            chart = new PieChart();
            System.out.println("初始化设置柱状图");
        }else if ("histogram".equals(type)){
            chart = new HistogramChart();
            System.out.println("初始化设置饼状图");
        }
        return chart;
    }
}
```
###### 客户端代码
```Java
public class Client {
    public static void main(String[] args) {
        Chart chart = ChartFactory.getChart("pie");
        chart.display();
    }
}
```