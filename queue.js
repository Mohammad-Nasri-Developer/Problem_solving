class MyQueue {
    constructor() {
        this.data = [];   // Array to store elements
        this.p_start = 0; // Pointer to indicate the start position
    }

    // Insert an element into the queue. Returns true if successful.
    enQueue(x) {
        this.data.push(x);
        return true;
    }

    // Delete an element from the queue. Returns true if successful.
    deQueue() {
        if (this.isEmpty()) {
            return false;
        }
        this.p_start++;
        return true;
    }

    // Get the front item from the queue.
    Front() {
        return this.data[this.p_start];
    }

    // Checks whether the queue is empty or not.
    isEmpty() {
        return this.p_start >= this.data.length;
    }
}

// Testing the MyQueue class
const q = new MyQueue();
q.enQueue(5);
q.enQueue(3);

if (!q.isEmpty()) {
    console.log(q.Front()); // Output: 5
}

q.deQueue();

if (!q.isEmpty()) {
    console.log(q.Front()); // Output: 3
}

q.deQueue();

if (!q.isEmpty()) {
    console.log(q.Front());
}
