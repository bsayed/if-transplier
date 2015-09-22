var performance, kSplayTreeSize, kSplayTreeModifications, kSplayTreePayloadDepth, splayTree, splaySampleTimeStart, splaySamples, splaySumOfSquaredPauses, $tmp0, $tmp1, $tmp2, $tmp3, $tmp4, $tmp5, $tmp6, $tmp7, $tmp8, $tmp9, $tmp10, $tmp11, $tmp12, $tmp13, $tmp14;
performance = performance || {};
performance.now = function () {
    var $tmp15;
    $tmp15 = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || Date.now;
    return $tmp15;
}();
kSplayTreeSize = 8000;
kSplayTreeModifications = 80;
kSplayTreePayloadDepth = 5;
splayTree = null;
splaySampleTimeStart = 0;
function GeneratePayloadTree(depth, tag) {
    var $tmp16;
    $tmp16 = depth == 0;
    if ($tmp16) {
        var $tmp17, $tmp18, $tmp19, $tmp20;
        $tmp18 = [
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
        $tmp20 = 'String for key ' + tag;
        $tmp19 = $tmp20 + ' in leaf node';
        $tmp17 = {
            array: $tmp18,
            string: $tmp19
        };
        return $tmp17;
    } else {
        var $tmp21, $tmp22, $tmp23, $tmp24, $tmp25;
        $tmp23 = depth - 1;
        $tmp22 = GeneratePayloadTree($tmp23, tag);
        $tmp25 = depth - 1;
        $tmp24 = GeneratePayloadTree($tmp25, tag);
        $tmp21 = {
            left: $tmp22,
            right: $tmp24
        };
        return $tmp21;
    }
}
function GenerateKey() {
    var $tmp26;
    $tmp26 = Math.random();
    return $tmp26;
}
splaySamples = 0;
splaySumOfSquaredPauses = 0;
function SplayRMS() {
    var $tmp27, $tmp28, $tmp29, $tmp30;
    $tmp30 = splaySumOfSquaredPauses / splaySamples;
    $tmp29 = Math.sqrt($tmp30);
    $tmp28 = $tmp29 * 10000;
    $tmp27 = Math.round($tmp28);
    return $tmp27;
}
function SplayUpdateStats(time) {
    var pause, $tmp31;
    pause = time - splaySampleTimeStart;
    splaySampleTimeStart = time;
    $tmp31 = splaySamples++;
    splaySumOfSquaredPauses += pause * pause;
}
function InsertNewNode() {
    var key, $tmp32, $tmp33, payload, $tmp34, $tmp35;
    $tmp33 = splayTree.find(key);
    $tmp32 = $tmp33 != null;
    do {
        key = GenerateKey();
        var $tmp32, $tmp36;
        $tmp36 = splayTree.find(key);
        $tmp32 = $tmp36 != null;
    } while ($tmp32);
    $tmp34 = String(key);
    payload = GeneratePayloadTree(kSplayTreePayloadDepth, $tmp34);
    $tmp35 = splayTree.insert(key, payload);
    return key;
}
function SplaySetup() {
    var $tmp37, $tmp38, i, $tmp40;
    $tmp38 = performance.now;
    $tmp37 = !$tmp38;
    if ($tmp37) {
        throw 'PerformanceNowUnsupported';
    } else {
    }
    splayTree = new SplayTree();
    splaySampleTimeStart = performance.now();
    i = 0;
    $tmp40 = i < kSplayTreeSize;
    for (; $tmp40;) {
        var $tmp41, $tmp42, $tmp43, $tmp44, $tmp39, $tmp40;
        $tmp41 = InsertNewNode();
        $tmp44 = i + 1;
        $tmp43 = $tmp44 % 20;
        $tmp42 = $tmp43 == 19;
        if ($tmp42) {
            var $tmp45, $tmp46;
            $tmp46 = performance.now();
            $tmp45 = SplayUpdateStats($tmp46);
        } else {
        }
        $tmp39 = i++;
        $tmp40 = i < kSplayTreeSize;
    }
}
function SplayTearDown() {
    var keys, length, $tmp47, i, $tmp49, $tmp50;
    keys = splayTree.exportKeys();
    splayTree = null;
    splaySamples = 0;
    splaySumOfSquaredPauses = 0;
    length = keys.length;
    $tmp47 = length != kSplayTreeSize;
    if ($tmp47) {
        var $tmp51;
        $tmp51 = new Error('Splay tree has wrong size');
        throw $tmp51;
    } else {
    }
    i = 0;
    $tmp50 = length - 1;
    $tmp49 = i < $tmp50;
    for (; $tmp49;) {
        var $tmp52, $tmp53, $tmp54, $tmp55, $tmp48, $tmp49, $tmp56;
        $tmp53 = keys[i];
        $tmp55 = i + 1;
        $tmp54 = keys[$tmp55];
        $tmp52 = $tmp53 >= $tmp54;
        if ($tmp52) {
            var $tmp57;
            $tmp57 = new Error('Splay tree not sorted');
            throw $tmp57;
        } else {
        }
        $tmp48 = i++;
        $tmp56 = length - 1;
        $tmp49 = i < $tmp56;
    }
}
function SplayRun() {
    var i, $tmp59, $tmp60, $tmp61;
    i = 0;
    $tmp59 = i < kSplayTreeModifications;
    for (; $tmp59;) {
        var key, greatest, $tmp62, $tmp58, $tmp59;
        key = InsertNewNode();
        greatest = splayTree.findGreatestLessThan(key);
        $tmp62 = greatest == null;
        if ($tmp62) {
            var $tmp63;
            $tmp63 = splayTree.remove(key);
        } else {
            var $tmp64, $tmp65;
            $tmp65 = greatest.key;
            $tmp64 = splayTree.remove($tmp65);
        }
        $tmp58 = i++;
        $tmp59 = i < kSplayTreeModifications;
    }
    $tmp61 = performance.now();
    $tmp60 = SplayUpdateStats($tmp61);
}
function SplayTree() {
}
;
$tmp0 = SplayTree.prototype;
$tmp0.root_ = null;
$tmp1 = SplayTree.prototype;
$tmp1.isEmpty = function () {
    var $tmp66, $tmp67, $tmp68;
    $tmp68 = this;
    $tmp67 = $tmp68.root_;
    $tmp66 = !$tmp67;
    return $tmp66;
};
$tmp2 = SplayTree.prototype;
$tmp2.insert = function (key, value) {
    var $tmp69, $tmp70, $tmp71, $tmp72, $tmp73, $tmp74, $tmp75, $tmp76, node, $tmp77, $tmp78, $tmp79, $tmp80, $tmp81;
    $tmp70 = this;
    $tmp69 = $tmp70.isEmpty();
    if ($tmp69) {
        var $tmp82;
        $tmp82 = this;
        $tmp82.root_ = new SplayTree.Node(key, value);
        return;
    } else {
    }
    $tmp72 = this;
    $tmp71 = $tmp72.splay_(key);
    $tmp76 = this;
    $tmp75 = $tmp76.root_;
    $tmp74 = $tmp75.key;
    $tmp73 = $tmp74 == key;
    if ($tmp73) {
        return;
    } else {
    }
    node = new SplayTree.Node(key, value);
    $tmp80 = this;
    $tmp79 = $tmp80.root_;
    $tmp78 = $tmp79.key;
    $tmp77 = key > $tmp78;
    if ($tmp77) {
        var $tmp83, $tmp84, $tmp85, $tmp86, $tmp87;
        $tmp83 = this;
        node.left = $tmp83.root_;
        $tmp85 = this;
        $tmp84 = $tmp85.root_;
        node.right = $tmp84.right;
        $tmp87 = this;
        $tmp86 = $tmp87.root_;
        $tmp86.right = null;
    } else {
        var $tmp88, $tmp89, $tmp90, $tmp91, $tmp92;
        $tmp88 = this;
        node.right = $tmp88.root_;
        $tmp90 = this;
        $tmp89 = $tmp90.root_;
        node.left = $tmp89.left;
        $tmp92 = this;
        $tmp91 = $tmp92.root_;
        $tmp91.left = null;
    }
    $tmp81 = this;
    $tmp81.root_ = node;
};
$tmp3 = SplayTree.prototype;
$tmp3.remove = function (key) {
    var $tmp93, $tmp94, $tmp95, $tmp96, $tmp97, $tmp98, $tmp99, $tmp100, removed, $tmp101, $tmp102, $tmp103, $tmp104, $tmp105;
    $tmp94 = this;
    $tmp93 = $tmp94.isEmpty();
    if ($tmp93) {
        var $tmp106, $tmp107;
        $tmp107 = 'Key not found: ' + key;
        $tmp106 = Error($tmp107);
        throw $tmp106;
    } else {
    }
    $tmp96 = this;
    $tmp95 = $tmp96.splay_(key);
    $tmp100 = this;
    $tmp99 = $tmp100.root_;
    $tmp98 = $tmp99.key;
    $tmp97 = $tmp98 != key;
    if ($tmp97) {
        var $tmp108, $tmp109;
        $tmp109 = 'Key not found: ' + key;
        $tmp108 = Error($tmp109);
        throw $tmp108;
    } else {
    }
    $tmp101 = this;
    removed = $tmp101.root_;
    $tmp105 = this;
    $tmp104 = $tmp105.root_;
    $tmp103 = $tmp104.left;
    $tmp102 = !$tmp103;
    if ($tmp102) {
        var $tmp110, $tmp111, $tmp112;
        $tmp110 = this;
        $tmp112 = this;
        $tmp111 = $tmp112.root_;
        $tmp110.root_ = $tmp111.right;
    } else {
        var right, $tmp113, $tmp114, $tmp115, $tmp116, $tmp117, $tmp118, $tmp119, $tmp120, $tmp121;
        $tmp114 = this;
        $tmp113 = $tmp114.root_;
        right = $tmp113.right;
        $tmp115 = this;
        $tmp117 = this;
        $tmp116 = $tmp117.root_;
        $tmp115.root_ = $tmp116.left;
        $tmp119 = this;
        $tmp118 = $tmp119.splay_(key);
        $tmp121 = this;
        $tmp120 = $tmp121.root_;
        $tmp120.right = right;
    }
    return removed;
};
$tmp4 = SplayTree.prototype;
$tmp4.find = function (key) {
    var $tmp122, $tmp123, $tmp124, $tmp125, $tmp126, $tmp178, $tmp179, $tmp180, $tmp181;
    $tmp123 = this;
    $tmp122 = $tmp123.isEmpty();
    if ($tmp122) {
        return null;
    } else {
    }
    $tmp125 = this;
    $tmp124 = $tmp125.splay_(key);
    $tmp181 = this;
    $tmp180 = $tmp181.root_;
    $tmp179 = $tmp180.key;
    $tmp178 = $tmp179 == key;
    if ($tmp178) {
        var $tmp182;
        $tmp182 = this;
        $tmp126 = $tmp182.root_;
    } else {
        $tmp126 = null;
    }
    return $tmp126;
};
$tmp5 = SplayTree.prototype;
$tmp5.findMax = function (opt_startNode) {
    var $tmp127, $tmp128, current, $tmp129;
    $tmp128 = this;
    $tmp127 = $tmp128.isEmpty();
    if ($tmp127) {
        return null;
    } else {
    }
    current = opt_startNode || this.root_;
    $tmp129 = current.right;
    while ($tmp129) {
        current = current.right;
        var $tmp129;
        $tmp129 = current.right;
    }
    return current;
};
$tmp6 = SplayTree.prototype;
$tmp6.findGreatestLessThan = function (key) {
    var $tmp130, $tmp131, $tmp132, $tmp133, $tmp134, $tmp135, $tmp136, $tmp137;
    $tmp131 = this;
    $tmp130 = $tmp131.isEmpty();
    if ($tmp130) {
        return null;
    } else {
    }
    $tmp133 = this;
    $tmp132 = $tmp133.splay_(key);
    $tmp137 = this;
    $tmp136 = $tmp137.root_;
    $tmp135 = $tmp136.key;
    $tmp134 = $tmp135 < key;
    if ($tmp134) {
        var $tmp138, $tmp139;
        $tmp139 = this;
        $tmp138 = $tmp139.root_;
        return $tmp138;
    } else {
        var $tmp183, $tmp184, $tmp185;
        $tmp185 = this;
        $tmp184 = $tmp185.root_;
        $tmp183 = $tmp184.left;
        if ($tmp183) {
            var $tmp140, $tmp141, $tmp142, $tmp143, $tmp144;
            $tmp141 = this;
            $tmp144 = this;
            $tmp143 = $tmp144.root_;
            $tmp142 = $tmp143.left;
            $tmp140 = $tmp141.findMax($tmp142);
            return $tmp140;
        } else {
            return null;
        }
    }
};
$tmp7 = SplayTree.prototype;
$tmp7.exportKeys = function () {
    var result, $tmp145, $tmp146, $tmp147;
    result = [];
    $tmp147 = this;
    $tmp146 = $tmp147.isEmpty();
    $tmp145 = !$tmp146;
    if ($tmp145) {
        var $tmp148, $tmp149, $tmp150, $tmp151;
        $tmp150 = this;
        $tmp149 = $tmp150.root_;
        $tmp151 = function (node) {
            var $tmp152, $tmp153;
            $tmp153 = node.key;
            $tmp152 = result.push($tmp153);
        };
        $tmp148 = $tmp149.traverse_($tmp151);
    } else {
    }
    return result;
};
$tmp8 = SplayTree.prototype;
$tmp8.splay_ = function (key) {
    var $tmp154, $tmp155, dummy, current, $tmp156, $tmp177, $tmp157;
    $tmp155 = this;
    $tmp154 = $tmp155.isEmpty();
    if ($tmp154) {
        return;
    } else {
    }
    dummy = left = right = new SplayTree.Node(null, null);
    $tmp156 = this;
    current = $tmp156.root_;
    $tmp177 = true;
    while ($tmp177) {
        var $tmp158, $tmp159;
        $tmp159 = current.key;
        $tmp158 = key < $tmp159;
        if ($tmp158) {
            var $tmp160, $tmp161, $tmp162, $tmp163, $tmp164;
            $tmp161 = current.left;
            $tmp160 = !$tmp161;
            if ($tmp160) {
                break;
            } else {
            }
            $tmp164 = current.left;
            $tmp163 = $tmp164.key;
            $tmp162 = key < $tmp163;
            if ($tmp162) {
                var tmp, $tmp165, $tmp166;
                tmp = current.left;
                current.left = tmp.right;
                tmp.right = current;
                current = tmp;
                $tmp166 = current.left;
                $tmp165 = !$tmp166;
                if ($tmp165) {
                    break;
                } else {
                }
            } else {
            }
            right.left = current;
            right = current;
            current = current.left;
        } else {
            var $tmp186, $tmp187;
            $tmp187 = current.key;
            $tmp186 = key > $tmp187;
            if ($tmp186) {
                var $tmp167, $tmp168, $tmp169, $tmp170, $tmp171;
                $tmp168 = current.right;
                $tmp167 = !$tmp168;
                if ($tmp167) {
                    break;
                } else {
                }
                $tmp171 = current.right;
                $tmp170 = $tmp171.key;
                $tmp169 = key > $tmp170;
                if ($tmp169) {
                    var tmp, $tmp172, $tmp173;
                    tmp = current.right;
                    current.right = tmp.left;
                    tmp.left = current;
                    current = tmp;
                    $tmp173 = current.right;
                    $tmp172 = !$tmp173;
                    if ($tmp172) {
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
    $tmp157 = this;
    $tmp157.root_ = current;
};
SplayTree.Node = function (key, value) {
    var $tmp174, $tmp175;
    $tmp174 = this;
    $tmp174.key = key;
    $tmp175 = this;
    $tmp175.value = value;
};
$tmp10 = SplayTree.Node;
$tmp9 = $tmp10.prototype;
$tmp9.left = null;
$tmp12 = SplayTree.Node;
$tmp11 = $tmp12.prototype;
$tmp11.right = null;
$tmp14 = SplayTree.Node;
$tmp13 = $tmp14.prototype;
$tmp13.traverse_ = function (f) {
    var current;
    current = this;
    while (current) {
        var left, $tmp176;
        left = current.left;
        if (left) {
            var $tmp188;
            $tmp188 = left.traverse_(f);
        } else {
        }
        $tmp176 = f(current);
        current = current.right;
    }
};

SplaySetup();
SplayRun();
SplayTearDown();