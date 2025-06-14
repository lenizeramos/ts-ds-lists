class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  average(): number {
    if (!this.head) {
      return 0;
    }

    let sum = 0;
    let count = 0;
    let current: ListNode<T> | null = this.head;

    while (current) {
      if (typeof current.value === "number") {
        sum += current.value;
        count++;
      }
      current = current.next;
    }

    return count > 0 ? sum / count : 0;
  }

  insertAtBack(value: T): void {
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

  toArr(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  insertAtBackMany(vals: T[]): void {
    for (const val of vals) {
      this.insertAtBack(val);
    }
  }

  removeBack(): void {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
}

const list = new LinkedList<number>();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
console.log(list);
console.log(list.average());
console.log(list.toArr());
list.insertAtBackMany([4, 5, 6]);
console.log(list.toArr());
list.removeBack();
console.log(list.toArr());
console.log(list);
