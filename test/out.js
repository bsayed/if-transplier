var performance, kSplayTreeSize, kSplayTreeModifications, kSplayTreePayloadDepth, splayTree, splaySampleTimeStart, splaySamples, splaySumOfSquaredPauses, $tmp0, $tmp1, $tmp2;
performance = {};
performance.now = Date.now;
kSplayTreeSize = 8000;
kSplayTreeModifications = 80;
kSplayTreePayloadDepth = 5;
splayTree = null;
splaySampleTimeStart = 0;
function GeneratePayloadTree(depth, tag) {
    var $tmp3;
    $tmp3 = depth == 0;
    if ($tmp3) {
        var $tmp4, $tmp5, $tmp6, $tmp7;
        $tmp5 = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ];
        $tmp7 = 'String for key ' + tag;
        $tmp6 = $tmp7 + ' in leaf node';
        $tmp4 = {
            array: $tmp5,
            string: $tmp6
        };
        return $tmp4;
    } else {
        var $tmp8, $tmp9, $tmp10, $tmp11, $tmp12;
        $tmp10 = depth - 1;
        $tmp9 = GeneratePayloadTree($tmp10, tag);
        $tmp12 = depth - 1;
        $tmp11 = GeneratePayloadTree($tmp12, tag);
        $tmp8 = {
            left: $tmp9,
            right: $tmp11
        };
        return $tmp8;
    }
}
function GenerateKey() {
    var $tmp13;
    $tmp13 = Math.random();
    return $tmp13;
}
splaySamples = 0;
splaySumOfSquaredPauses = 0;
function SplayRMS() {
    var $tmp14, $tmp15, $tmp16, $tmp17;
    $tmp17 = splaySumOfSquaredPauses / splaySamples;
    $tmp16 = Math.sqrt($tmp17);
    $tmp15 = $tmp16 * 10000;
    $tmp14 = Math.round($tmp15);
    return $tmp14;
}
function SplayUpdateStats(time) {
    var pause, $tmp18;
    pause = time - splaySampleTimeStart;
    splaySampleTimeStart = time;
    $tmp18 = splaySamples++;
    splaySumOfSquaredPauses += pause * pause;
}
function InsertNewNode() {
    var key, $tmp19, $tmp20, payload, $tmp21, $tmp22;
    $tmp20 = splayTree.find(key);
    $tmp19 = $tmp20 != null;
    do {
        key = GenerateKey();
        var $tmp19, $tmp23;
        $tmp23 = splayTree.find(key);
        $tmp19 = $tmp23 != null;
    } while ($tmp19);
    $tmp21 = String(key);
    payload = GeneratePayloadTree(kSplayTreePayloadDepth, $tmp21);
    $tmp22 = splayTree.insert(key, payload);
    return key;
}
function SplaySetup() {
    var $tmp24, $tmp25, i, $tmp27;
    $tmp25 = performance.now;
    $tmp24 = !$tmp25;
    if ($tmp24) {
        var $tmp28;
        $tmp28 = 'PerformanceNowUnsupported';
        throw $tmp28;
    } else {
    }
    splayTree = new SplayTree();
    splaySampleTimeStart = performance.now();
    i = 0;
    $tmp27 = i < kSplayTreeSize;
    for (; $tmp27;) {
        var $tmp29, $tmp30, $tmp31, $tmp32, $tmp26, $tmp27;
        $tmp29 = InsertNewNode();
        $tmp32 = i + 1;
        $tmp31 = $tmp32 % 20;
        $tmp30 = $tmp31 == 19;
        if ($tmp30) {
            var $tmp33, $tmp34;
            $tmp34 = performance.now();
            $tmp33 = SplayUpdateStats($tmp34);
        } else {
        }
        $tmp26 = i++;
        $tmp27 = i < kSplayTreeSize;
    }
}
function SplayTearDown() {
    var keys, length, $tmp35, i, $tmp37, $tmp38;
    keys = splayTree.exportKeys();
    splayTree = null;
    splaySamples = 0;
    splaySumOfSquaredPauses = 0;
    length = keys.length;
    $tmp35 = length != kSplayTreeSize;
    if ($tmp35) {
        var $tmp39;
        $tmp39 = new Error('Splay tree has wrong size');
        throw $tmp39;
    } else {
    }
    i = 0;
    $tmp38 = length - 1;
    $tmp37 = i < $tmp38;
    for (; $tmp37;) {
        var $tmp40, $tmp41, $tmp42, $tmp43, $tmp36, $tmp37, $tmp44;
        $tmp41 = keys[i];
        $tmp43 = i + 1;
        $tmp42 = keys[$tmp43];
        $tmp40 = $tmp41 >= $tmp42;
        if ($tmp40) {
            var $tmp45;
            $tmp45 = new Error('Splay tree not sorted');
            throw $tmp45;
        } else {
        }
        $tmp36 = i++;
        $tmp44 = length - 1;
        $tmp37 = i < $tmp44;
    }
}
function SplayRun() {
    var i, $tmp47, $tmp48, $tmp49;
    i = 0;
    $tmp47 = i < kSplayTreeModifications;
    for (; $tmp47;) {
        var key, greatest, $tmp50, $tmp46, $tmp47;
        key = InsertNewNode();
        greatest = splayTree.findGreatestLessThan(key);
        $tmp50 = greatest == null;
        if ($tmp50) {
            var $tmp51;
            $tmp51 = splayTree.remove(key);
        } else {
            var $tmp52, $tmp53;
            $tmp53 = greatest.key;
            $tmp52 = splayTree.remove($tmp53);
        }
        $tmp46 = i++;
        $tmp47 = i < kSplayTreeModifications;
    }
    $tmp49 = performance.now();
    $tmp48 = SplayUpdateStats($tmp49);
}
function SplayTree() {
}
;
SplayTree.prototype.root_ = null;
SplayTree.prototype.isEmpty = function () {
    var $tmp54, $tmp55;
    $tmp = this;
    $tmp55 = $tmp.root_;
    $tmp54 = !$tmp55;
    return $tmp54;
};
SplayTree.prototype.insert = function (key, value) {
    var $tmp56, $tmp57, $tmp58, $tmp59, node, $tmp60, $tmp61;
    $tmp = this;
    $tmp56 = $tmp.isEmpty();
    if ($tmp56) {
        this.root_ = new SplayTree.Node(key, value);
        return;
    } else {
    }
    $tmp = this;
    $tmp57 = $tmp.splay_(key);
    $tmp = this;
    $tmp = $tmp.root_;
    $tmp59 = $tmp.key;
    $tmp58 = $tmp59 == key;
    if ($tmp58) {
        return;
    } else {
    }
    node = new SplayTree.Node(key, value);
    $tmp = this;
    $tmp = $tmp.root_;
    $tmp61 = $tmp.key;
    $tmp60 = key > $tmp61;
    if ($tmp60) {
        var $tmp;
        $tmp = this;
        node.left = $tmp.root_;
        $tmp = this;
        $tmp = $tmp.root_;
        node.right = $tmp.right;
        $tmp = this;
        $tmp = $tmp.root_;
        $tmp.right = null;
    } else {
        var $tmp;
        $tmp = this;
        node.right = $tmp.root_;
        $tmp = this;
        $tmp = $tmp.root_;
        node.left = $tmp.left;
        $tmp = this;
        $tmp = $tmp.root_;
        $tmp.left = null;
    }
    this.root_ = node;
};
SplayTree.prototype.remove = function (key) {
    var $tmp62, $tmp63, $tmp64, $tmp65, removed, $tmp66, $tmp67;
    $tmp = this;
    $tmp62 = $tmp.isEmpty();
    if ($tmp62) {
        var $tmp68, $tmp69;
        $tmp69 = 'Key not found: ' + key;
        $tmp68 = Error($tmp69);
        throw $tmp68;
    } else {
    }
    $tmp = this;
    $tmp63 = $tmp.splay_(key);
    $tmp = this;
    $tmp = $tmp.root_;
    $tmp65 = $tmp.key;
    $tmp64 = $tmp65 != key;
    if ($tmp64) {
        var $tmp70, $tmp71;
        $tmp71 = 'Key not found: ' + key;
        $tmp70 = Error($tmp71);
        throw $tmp70;
    } else {
    }
    $tmp = this;
    removed = $tmp.root_;
    $tmp = this;
    $tmp = $tmp.root_;
    $tmp67 = $tmp.left;
    $tmp66 = !$tmp67;
    if ($tmp66) {
        var $tmp;
        $tmp = this;
        $tmp = $tmp.root_;
        this.root_ = $tmp.right;
    } else {
        var right, $tmp72;
        $tmp = this;
        $tmp = $tmp.root_;
        right = $tmp.right;
        $tmp = this;
        $tmp = $tmp.root_;
        this.root_ = $tmp.left;
        $tmp = this;
        $tmp72 = $tmp.splay_(key);
        $tmp = this;
        $tmp = $tmp.root_;
        $tmp.right = right;
    }
    return removed;
};
SplayTree.prototype.find = function (key) {
    var $tmp73, $tmp74, $tmp75, $tmp112, $tmp113;
    $tmp = this;
    $tmp73 = $tmp.isEmpty();
    if ($tmp73) {
        var $tmp76;
        $tmp76 = null;
        return $tmp76;
    } else {
    }
    $tmp = this;
    $tmp74 = $tmp.splay_(key);
    $tmp = this;
    $tmp = $tmp.root_;
    $tmp113 = $tmp.key;
    $tmp112 = $tmp113 == key;
    if ($tmp112) {
        var $tmp;
        $tmp = this;
        $tmp75 = $tmp.root_;
    } else {
        $tmp75 = null;
    }
    return $tmp75;
};
SplayTree.prototype.findMax = function (opt_startNode) {
    var $tmp77, current, $tmp78, $tmp79;
    $tmp = this;
    $tmp77 = $tmp.isEmpty();
    if ($tmp77) {
        var $tmp80;
        $tmp80 = null;
        return $tmp80;
    } else {
    }
    $tmp = this;
    $tmp78 = $tmp.root_;
    current = opt_startNode || $tmp78;
    $tmp79 = current.right;
    while ($tmp79) {
        current = current.right;
        var $tmp79;
        $tmp79 = current.right;
    }
    return current;
};
SplayTree.prototype.findGreatestLessThan = function (key) {
    var $tmp81, $tmp82, $tmp83, $tmp84;
    $tmp = this;
    $tmp81 = $tmp.isEmpty();
    if ($tmp81) {
        var $tmp85;
        $tmp85 = null;
        return $tmp85;
    } else {
    }
    $tmp = this;
    $tmp82 = $tmp.splay_(key);
    $tmp = this;
    $tmp = $tmp.root_;
    $tmp84 = $tmp.key;
    $tmp83 = $tmp84 < key;
    if ($tmp83) {
        var $tmp86;
        $tmp = this;
        $tmp86 = $tmp.root_;
        return $tmp86;
    } else {
        var $tmp114;
        $tmp = this;
        $tmp = $tmp.root_;
        $tmp114 = $tmp.left;
        if ($tmp114) {
            var $tmp87, $tmp88;
            $tmp = this;
            $tmp = this;
            $tmp = $tmp.root_;
            $tmp88 = $tmp.left;
            $tmp87 = $tmp.findMax($tmp88);
            return $tmp87;
        } else {
            var $tmp89;
            $tmp89 = null;
            return $tmp89;
        }
    }
};
SplayTree.prototype.exportKeys = function () {
    var result, $tmp90, $tmp91;
    result = [];
    $tmp = this;
    $tmp91 = $tmp.isEmpty();
    $tmp90 = !$tmp91;
    if ($tmp90) {
        var $tmp92, $tmp93;
        $tmp = this;
        $tmp = $tmp.root_;
        $tmp93 = function (node) {
            var $tmp94, $tmp95;
            $tmp95 = node.key;
            $tmp94 = result.push($tmp95);
        };
        $tmp92 = $tmp.traverse_($tmp93);
    } else {
    }
    return result;
};
SplayTree.prototype.splay_ = function (key) {
    var $tmp96, dummy, left, right, current;
    $tmp = this;
    $tmp96 = $tmp.isEmpty();
    if ($tmp96) {
        return;
    } else {
    }
    right = new SplayTree.Node(null, null);
    left = right;
    dummy = left;
    $tmp = this;
    current = $tmp.root_;
    while (true) {
        var $tmp97, $tmp98;
        $tmp98 = current.key;
        $tmp97 = key < $tmp98;
        if ($tmp97) {
            var $tmp99, $tmp100, $tmp101, $tmp102;
            $tmp100 = current.left;
            $tmp99 = !$tmp100;
            if ($tmp99) {
                break;
            } else {
            }
            $tmp = current.left;
            $tmp102 = $tmp.key;
            $tmp101 = key < $tmp102;
            if ($tmp101) {
                var tmp, $tmp103, $tmp104;
                tmp = current.left;
                current.left = tmp.right;
                tmp.right = current;
                current = tmp;
                $tmp104 = current.left;
                $tmp103 = !$tmp104;
                if ($tmp103) {
                    break;
                } else {
                }
            } else {
            }
            right.left = current;
            right = current;
            current = current.left;
        } else {
            var $tmp115, $tmp116;
            $tmp116 = current.key;
            $tmp115 = key > $tmp116;
            if ($tmp115) {
                var $tmp105, $tmp106, $tmp107, $tmp108;
                $tmp106 = current.right;
                $tmp105 = !$tmp106;
                if ($tmp105) {
                    break;
                } else {
                }
                $tmp = current.right;
                $tmp108 = $tmp.key;
                $tmp107 = key > $tmp108;
                if ($tmp107) {
                    var tmp, $tmp109, $tmp110;
                    tmp = current.right;
                    current.right = tmp.left;
                    tmp.left = current;
                    current = tmp;
                    $tmp110 = current.right;
                    $tmp109 = !$tmp110;
                    if ($tmp109) {
                        break;
                    } else {
                    }
                } else {
                }
                left.right = current;
                left = current;
                current = current.right;
            } else {
                break;
            }
        }
    }
    left.right = current.left;
    right.left = current.right;
    current.left = dummy.right;
    current.right = dummy.left;
    this.root_ = current;
};
SplayTree.Node = function (key, value) {
    this.key = key;
    this.value = value;
};
SplayTree.Node.prototype.left = null;
SplayTree.Node.prototype.right = null;
SplayTree.Node.prototype.traverse_ = function (f) {
    var current;
    current = this;
    while (current) {
        var left, $tmp111;
        left = current.left;
        if (left) {
            var $tmp117;
            $tmp117 = left.traverse_(f);
        } else {
        }
        $tmp111 = f(current);
        current = current.right;
    }
};
$tmp0 = SplaySetup();
$tmp1 = SplayRun();
$tmp2 = SplayTearDown();