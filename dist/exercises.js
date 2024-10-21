"use strict";
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    average() {
        if (!this.head) {
            return 0;
        }
        let sum = 0;
        let count = 0;
        let current = this.head;
        while (current) {
            if (typeof current.value === "number") {
                sum += current.value;
                count++;
            }
            current = current.next;
        }
        return count > 0 ? sum / count : 0;
    }
    insertAtBack(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    toArr() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
    insertAtBackMany(vals) {
        for (const val of vals) {
            this.insertAtBack(val);
        }
    }
}
const list = new LinkedList();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
console.log(list.average());
console.log(list.toArr());
list.insertAtBackMany([4, 5, 6]);
console.log(list.toArr());
