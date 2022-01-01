function search(nums, target) {
    const minIdx = findMinIdx(nums);

    const left = binarySearch(nums, target, 0, minIdx - 1);
    const right = binarySearch(nums, target, minIdx, nums.length - 1);

    return Math.max(left, right);
}

function findMinIdx(rotatedSortedArr) {
    let left = 0;
    let right = rotatedSortedArr.length - 1;

    if (rotatedSortedArr.length === 1) {
        return 0;
    }
    if (rotatedSortedArr[left] < rotatedSortedArr[right]) {
        return 0;
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (rotatedSortedArr[mid] < rotatedSortedArr[mid - 1]) {
            return mid;
        }

        if (rotatedSortedArr[mid] > rotatedSortedArr[mid + 1]) {
            return mid + 1;
        }

        if (rotatedSortedArr[mid] < rotatedSortedArr[left]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}

function binarySearch(nums, target, left, right) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        const leftVal = nums[left];
        const midVal = nums[mid];
        const leftOfMid = nums[mid - 1];
        const rightOfMid = nums[mid + 1];

        if (midVal > rightOfMid) {
            return rightOfMid;
        } else if (leftOfMid > midVal) {
            return midVal;
        }

        if (midVal > leftVal) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}
module.exports = search;
