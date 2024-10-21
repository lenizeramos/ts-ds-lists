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
}

const list = new LinkedList<number>();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
console.log(list.average());