import type { HomeCardProps } from './Card'
export const mockCardData: HomeCardProps[] = [
  {
    title: '为什么说 immutable 是 React 的核心，如何理解这一概念？'
  },
  {
    title: '程序员内卷严重，月薪2万毫无幸福感！看不透这三点，别谈幸福感'
  },
  {
    title: '在中国程序员能不能干一辈子？'
  },
  {
    title: '程序员未来会成为非常内卷的职业么？'
  }
].map((x, idx) => {
  return {
    commentCount: idx + 100,
    content:
      '很多人在概念层面来解析这个问题，试图用State Monad来表示f -> UI这个核心映射，但实际上并无任何实际价值，也完全无法让你理解为什么immutable是react目前的核心这一问题。今天在这里不探讨FP的实际作用（必须承认，很难有一个确切的证据证明它比响应式工作的更好），-而是谈谈当前React以及未来最核心的架构。目前市面上的三种框架，无非是以Vue为首的响应式ui，这种框架特定就是简单，在通常意义下运行得非常快，但大规模的依赖收集和清理会带来额外的运作成本和内存消耗。第二种就是react这类，依靠f -> UI这种声明式方案来更新视图，这种的好处在于它比依赖native api的响应式框架灵活太多。最后一种就是svelte，这种东西完全就是为web component而生，特点就是傻快，但没办法做dsl转换了（没vdom）。不过因为它就作用于小范围的dom，往往在编写小页面和web component时会带来的性能会远超于使用virtual dom或者增量dom的前端三框架。 而react因为有了所谓的immutable，它具有了很强很强的灵活性，比如它能进行一种奇怪的调度：',
    id: idx,
    likeCount: 999 + idx,
    title: x.title
  }
})
