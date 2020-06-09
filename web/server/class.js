
// targetClass中是否包含checkClass

export function hasClass(targetClass, checkClass) {
    targetClass = " " + targetClass + " ";
    checkClass = " " + checkClass.trim() + " ";

    return targetClass.indexOf(checkClass) > -1;
}

// targetClass中删除checkClass

export function deleteClass(targetClass, checkClass) {
    targetClass = " " + targetClass + " ";
    checkClass = " " + checkClass.trim() + " ";

    while (targetClass.indexOf(checkClass) > -1) {
        targetClass = targetClass.replace(checkClass, " ");
    }

    // 最后调整一下
    return targetClass.trim().replace(/ +/g, " ");
}