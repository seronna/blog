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

## 工厂方法模式
> 定义一个用于创建对象的接口（抽象工厂），但是让子类决定将哪一个类实例化。工厂方法使一个类的实例化延迟到其子类。

::: info 实例说明

某系统运行日志记录器(Logger)可以通过多种途径保存系统的运行日志，例如通过文件记录或数据库记录，用户可以通过修改配置文件灵活地更换日志记录方式。在设计各类日志记录器时，开发人员发现需要对日志记录器进行一些初始化工作，初始化参数的设置过程较为复杂，而且某些参数的设置有严格的先后次序，否则可能会发生记录失败。
为了更好地封装记录器的初始化过程并保证多种记录器切换的灵活性,现使用工厂方法模式设计该系统(注:在Java中常用的日志记录工具有SLF4J、Log4j、GCLogViewer、Logstash等)。

:::

1. Logger 日志记录器接口，充当抽象产品角色
````Java
public interface Logger {
    public void writeLog();
} 
````

2. DatabaseLogger 日志记录器-数据库记录器，充当具体产品角色
```Java
public class DataBaseLogger implements Logger {

    @Override
    public void writeLog() {
        System.out.println("数据库日志记录");
    }
}

public class FileLogger implements Logger {
    @Override
    public void writeLog() {
        System.out.println("文件日志记录");
    }
}
```

3. LoggerFactory 日志记录器工厂接口，充当抽象工厂角色
```Java
public interface LoggerFactory {
    public Logger createLogger();
}
```

4. DataBaseLogger 数据库日志记录器工厂类，充当具体工厂角色
```Java
public class DatabaseLoggerFactory implements LoggerFactory{
    @Override
    public Logger createLogger() {
        return new DataBaseLogger();
    }
}

public class FileLoggerFactory implements LoggerFactory{
    @Override
    public Logger createLogger() {
        return new FileLogger();
    }
}
```

5. 客户端代码
```Java
public class Client {
    public static void main(String[] args) {
        LoggerFactory loggerFactory;
        Logger logger;
        loggerFactory = new FileLoggerFactory();
        logger = loggerFactory.createLogger();
        logger.writeLog();
    }
}
```

## 原型模式
> 使用原型实例指定待创建的对象的类型，并且通过复制这个原型来创建新的对象。

::: info 实例说明

在使用某OA系统时，有些岗位的员工发现他们每周的工作都大同小异，因此在填写工作周报时很多内容都是重复的，为了提高工作周报的创建效率，大家迫切希望有一种机制能够快速创建相同或者相似的周报，包括创建周报的附件。
试使用原型模式对该OA系统中的工作周报创建模块进行改进。

:::

1. 附件类
```Java
@Data
public class Attachment implements Serializable {

    private String name;

    public void download(){
        System.out.println("下载附件，文件名为" + name);
    }
}
```

2. 工作周报类
```Java
@Data
public class WeeklyLog implements Serializable {

    private Attachment attachment;

    private String name;

    private String date;

    private String content;

    //使用clone()方法实现浅克隆
    public WeeklyLog clone() {
        Object obj = null;
        try {
            obj = super.clone();
            return (WeeklyLog)obj;
        }
        catch(CloneNotSupportedException e) {
            System.out.println("不支持复制！");
            return null;
        }
    }

    //使用序列化技术实现深克隆
    public WeeklyLog deepClone() throws IOException, ClassNotFoundException, OptionalDataException {
        //将对象写入流中
        ByteArrayOutputStream bao=new ByteArrayOutputStream();
        ObjectOutputStream oos=new ObjectOutputStream(bao);
        oos.writeObject(this);

        //将对象从流中取出
        ByteArrayInputStream bis=new ByteArrayInputStream(bao.toByteArray());
        ObjectInputStream ois=new ObjectInputStream(bis);
        return (WeeklyLog)ois.readObject();
    }
}
```

## 单例模式
> 保证一个类仅有一个实例，并提供一个访问它的全局访问点。

// todo



## 桥接模式
> 将抽象部分与它的实现部分分离，使它们都可以独立地变化。

::: info 实例说明

某软件公司要开发一个跨平台图像浏览系统，要求该系统能够显示BMP、JPG、GIF、PNG等多种格式的文件，并且能够在Windows、Linux、UNIX等多个操作系统上运行。系统首先将各种格式的文件解析为像素矩阵(Matrix),然后将像素矩阵显示在屏幕上，在不同的操作系统中可以调用不同的绘制函数来绘制像素矩阵。系统需具有较好的扩展性，以便在将来支持新的文件格式和操作系统。
试使用桥接模式设计该跨平台图像浏览系统。

:::

1. Matrix 图像矩阵类
```Java
public class Matrix {
} 
```

2. ImageImp 抽象操作系统实现类
```Java
public interface ImageImp {

    public void doPaint(Matrix matrix);
} 
```

3. WindowsImp Windows/Linux操作系统实现类
```Java
public class WindowsImp implements ImageImp {

    @Override
    public void doPaint(Matrix matrix) {
        System.out.println("Windows绘制图片");
    }
}

public class LinuxImp implements ImageImp{
    @Override
    public void doPaint(Matrix matrix) {
        System.out.println("Linux绘制图像");
    }
}
public class UnixImp implements ImageImp{
    @Override
    public void doPaint(Matrix matrix) {
        System.out.println("Unix绘制图像");
    }
} 
```

4. Image 抽象图像类，充当抽象类
```Java
@Setter
public abstract class Image {

    protected ImageImp imageImp;

    public abstract void parseFile(String fileName);
} 
```

5. JPG、GIF、BMP、PNG 图像类,充当扩展抽象类
````Java
public class JPGImage extends Image{
    @Override
    public void parseFile(String fileName) {
        Matrix matrix = new Matrix();
        imageImp.doPaint(matrix);
        System.out.println(fileName + "，格式为JPG");
    }
}

public class PNGImage extends Image{
    @Override
    public void parseFile(String fileName) {
        Matrix matrix = new Matrix();
        imageImp.doPaint(matrix);
        System.out.println(fileName + "，格式为PNG");
    }
}
````

6. 客户端代码
````Java
public class Client {


    public static void main(String[] args) {
        Image jpgImage = new JPGImage();

        LinuxImp linuxImp = new LinuxImp();

        jpgImage.setImageImp(linuxImp);

        jpgImage.parseFile("demo");

        linuxImp.doPaint(new Matrix());
    }
}
````