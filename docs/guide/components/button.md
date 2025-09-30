<script setup lang="ts">
</script>

# Button 按钮组件

常用的操作按钮，支持多种样式和状态，适用于表单提交、操作触发等场景。

## 主要按钮

用于主操作，突出显示。

```vue
<Button type="primary">主要按钮</Button>
```

## 次要按钮

用于次要操作。

```vue
<Button type="default">默认按钮</Button>
<Button type="dashed">虚线按钮</Button>
<Button type="text">文字按钮</Button>
```

## 禁用状态

按钮不可点击。

```vue
<Button type="primary" disabled>禁用按钮</Button>
```

## 加载状态

用于异步操作等待。

```vue
<Button type="primary" loading>加载中</Button>
```

## 按钮属性

| 属性     | 说明       | 类型    | 默认值  |
| -------- | ---------- | ------- | ------- |
| type     | 按钮类型   | string  | default |
| disabled | 是否禁用   | boolean | false   |
| loading  | 是否加载中 | boolean | false   |
| size     | 按钮尺寸   | string  | medium  |

## 按钮事件

| 事件  | 说明     | 回调参数 |
| ----- | -------- | -------- |
| click | 点击事件 | (event)  |

## 示例代码

::: details 查看代码

```vue
<template>
  <Button type="primary" @click="handleClick">主要按钮</Button>
</template>
<script setup lang="ts">
function handleClick() {
  // 处理点击事件
}
</script>
```

:::
