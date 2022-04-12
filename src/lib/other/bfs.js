/**
 * @description 广度遍历 (bfs)
 * @param {Object | Array} data : 树节点 或 children 数组
 * @param {Function | Object} cb : 每个节点的回调函数 或 一个对象（包含children的别名 children 属性和 每项回调函数cb属性）
 */

export default function bfs(data, cb) {
    const list = Array.isArray(data) ? data : [data];
    const aliasChidren = cb.children || "children";
    while (list.length) {
        const item = list.shift();
        cb.cb ? cb.cb(item) : cb ? cb(item) : null;
        item &&
            item[aliasChidren] &&
            item[aliasChidren].length &&
            item[aliasChidren].forEach((child) => list.push(child));
    }
}

/**
 *
 * bfs(list,cb(item){})
 * bfs(list,{chidlren:'child',cb(item){}})
 *
 * bfs(root,cb(item){})
 * bfs(root,{chidlren:'child',cb(item){}})
 *
 *
 *
 */
