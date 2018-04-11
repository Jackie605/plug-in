## tabs插件

### 组件功能
实现tabs的切换
### 组件实现方式
使用了query
### 如何使用
- HTML的格式为
```
<div class="container">
  <ul class="tabs">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
  <ul class="pannel">
    <li class='active'>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
</div>
```

- JS的形式
```
new Tab($('.container').eq(0))
new Tab($('.container').eq(1))
```
