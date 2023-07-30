---

---

# 环形链表 II

## 题目

给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

**不允许修改** 链表。

示例 1：

![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

示例 2：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
```

示例 3：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

```
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
```

## 解题思路

利用数组保存遍历过的节点，在遍历新节点时判断是否在数组中存在相同的节点。js数组的includes方法判断值相等问题用的是严格相等，即指向型引用，地址是否相等。

### 代码1

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let arr = new Array();//数组中用以存放遍历过的节点
    let i=0;
    let ph = new ListNode(0);//临时指针用以遍历链表
    ph = head;
    while(1){
        if(ph==null) return null;//如果节点为null则结束循环
        if(!arr.includes(ph)) arr.push(ph);//如果节点不在数组中则将节点加入数组
        else {//如果节点在数组中，则说明链表循环了
            return ph;//返回这个循环的节点
        }
        ph = ph.next;
    }
};
```

### 代码2

```js
var detectCycle = function(head) {
    const visited = new Set();//将已访问过的节点存入set集合中
    while (head !== null) {
        if (visited.has(head)) {//当当前节点存在在set集合中时，表明已经访问过此时开始了循环
            return head;
        }
        visited.add(head);
        head = head.next;
    }
    return null;
};
```

## 快慢指针解题思路

我们使用两个指针，fast与slow。它们起始都位于链表的头部。随后，slow指针每次向后移动一个位置，而fast指针向后移动两个位置。如果链表中存在环，则fast指针最终将再次与slow指针在环中相遇。

### 代码

```js
var detectCycle = function(head) {
    let fast = null,slow=null;
    fast = slow = head;
    while(fast){
        slow = slow.next;//慢指针一次移动一位
        if(fast.next!==null){
            fast = fast.next.next;//快指针一次移动两位
        }else return null;//当快指针指向节点的第二给节点为null时也返回null
        //当快慢指针相遇时，满指针到入环第一给节点的距离和头节点到入环第一个节点的距离相等
        if(fast === slow){
            let ptr = head;//此时定义一个新指针，开始冲头遍历
            while(ptr !== slow){//同时移动慢指针和头节点指针，直到两指针相遇
                slow = slow.next;
                ptr = ptr.next;
            }
            return ptr;//两指针相遇，返回相遇节点
        }
    }
    return null;
};
```

