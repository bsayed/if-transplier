var dbits, BI_DB, BI_DM, BI_DV, BI_FP, BI_FV, BI_F1, BI_F2, canary, j_lm, $tmp0, BI_RM, BI_RC, rr, $tmp1, $tmp2, $tmp4, $tmp5, $tmp6, $tmp8, $tmp9, $tmp10, $tmp12, $tmp13, $tmp14, $tmp15, $tmp16, $tmp17, $tmp18, $tmp19, $tmp20, $tmp21, $tmp22, $tmp23, $tmp24, $tmp25, $tmp26, $tmp27, $tmp28, $tmp29, $tmp30, $tmp31, $tmp32, $tmp33, $tmp34, $tmp35, $tmp36, $tmp37, $tmp38, $tmp39, $tmp40, $tmp41, $tmp42, $tmp43, $tmp44, $tmp45, $tmp46, $tmp47, $tmp48, $tmp49, $tmp50, $tmp51, $tmp52, $tmp53, lowprimes, lplim, $tmp54, $tmp55, $tmp56, $tmp57, $tmp58, $tmp59, $tmp60, $tmp61, $tmp62, $tmp63, $tmp64, $tmp65, $tmp66, $tmp67, $tmp68, $tmp69, $tmp70, $tmp71, $tmp72, $tmp73, $tmp74, $tmp75, $tmp76, $tmp77, $tmp78, $tmp79, $tmp80, $tmp81, $tmp82, $tmp83, $tmp84, $tmp85, $tmp86, $tmp87, $tmp88, $tmp89, $tmp90, $tmp91, $tmp92, $tmp93, $tmp94, $tmp95, $tmp96, $tmp97, $tmp98, $tmp99, $tmp100, $tmp101, $tmp102, $tmp103, $tmp104, $tmp105, rng_psize, rng_state, rng_pool, rng_pptr, $tmp106, $tmp107, $tmp108, $tmp109, $tmp110, $tmp111, $tmp112, $tmp113, $tmp114, $tmp115, $tmp116, TEXT, encrypted, $tmp117, $tmp118;
canary = 244837814094590;
$tmp0 = canary & 16777215;
j_lm = $tmp0 == 15715070;
function BigInteger(a, b, c) {
    var $tmp119, $tmp120;
    $tmp119 = this;
    $tmp119.array = new Array();
    $tmp120 = a != null;
    if ($tmp120) {
        var $tmp1536, $tmp1537;
        $tmp1537 = typeof a;
        $tmp1536 = 'number' == $tmp1537;
        if ($tmp1536) {
            var $tmp1538, $tmp1539;
            $tmp1539 = this;
            $tmp1538 = $tmp1539.fromNumber(a, b, c);
        } else {
            var $tmp1540;
            $tmp1540 = b == null && 'string' != typeof a;
            if ($tmp1540) {
                var $tmp1541, $tmp1542;
                $tmp1542 = this;
                $tmp1541 = $tmp1542.fromString(a, 256);
            } else {
                var $tmp1543, $tmp1544;
                $tmp1544 = this;
                $tmp1543 = $tmp1544.fromString(a, b);
            }
        }
    } else {
    }
}
function nbi() {
    var $tmp121;
    $tmp121 = new BigInteger(null);
    return $tmp121;
}
function am1(i, x, w, j, c, n) {
    var this_array, $tmp122, w_array, $tmp123, $tmp124;
    $tmp122 = this;
    this_array = $tmp122.array;
    w_array = w.array;
    $tmp124 = --n;
    $tmp123 = $tmp124 >= 0;
    while ($tmp123) {
        var v, $tmp125, $tmp126, $tmp127, $tmp128, $tmp129, $tmp130, $tmp131, $tmp123, $tmp132;
        $tmp128 = i++;
        $tmp127 = this_array[$tmp128];
        $tmp126 = x * $tmp127;
        $tmp129 = w_array[j];
        $tmp125 = $tmp126 + $tmp129;
        v = $tmp125 + c;
        $tmp130 = v / 67108864;
        c = Math.floor($tmp130);
        $tmp131 = j++;
        w_array[$tmp131] = v & 67108863;
        $tmp132 = --n;
        $tmp123 = $tmp132 >= 0;
    }
    return c;
}
function am2(i, x, w, j, c, n) {
    var this_array, $tmp133, w_array, xl, $tmp134, $tmp135;
    $tmp133 = this;
    this_array = $tmp133.array;
    w_array = w.array;
    xl = x & 32767;
    xh = x >> 15;
    $tmp135 = --n;
    $tmp134 = $tmp135 >= 0;
    while ($tmp134) {
        var l, $tmp136, h, $tmp137, $tmp138, m, $tmp139, $tmp140, $tmp141, $tmp142, $tmp143, $tmp144, $tmp145, $tmp146, $tmp147, $tmp148, $tmp149, $tmp150, $tmp151, $tmp152, $tmp153, $tmp154, $tmp134, $tmp155;
        $tmp136 = this_array[i];
        l = $tmp136 & 32767;
        $tmp138 = i++;
        $tmp137 = this_array[$tmp138];
        h = $tmp137 >> 15;
        $tmp139 = xh * l;
        $tmp140 = h * xl;
        m = $tmp139 + $tmp140;
        $tmp143 = xl * l;
        $tmp145 = m & 32767;
        $tmp144 = $tmp145 << 15;
        $tmp142 = $tmp143 + $tmp144;
        $tmp146 = w_array[j];
        $tmp141 = $tmp142 + $tmp146;
        $tmp147 = c & 1073741823;
        l = $tmp141 + $tmp147;
        $tmp150 = l >>> 30;
        $tmp151 = m >>> 15;
        $tmp149 = $tmp150 + $tmp151;
        $tmp152 = xh * h;
        $tmp148 = $tmp149 + $tmp152;
        $tmp153 = c >>> 30;
        c = $tmp148 + $tmp153;
        $tmp154 = j++;
        w_array[$tmp154] = l & 1073741823;
        $tmp155 = --n;
        $tmp134 = $tmp155 >= 0;
    }
    return c;
}
function am3(i, x, w, j, c, n) {
    var this_array, $tmp156, w_array, xl, $tmp157, $tmp158;
    $tmp156 = this;
    this_array = $tmp156.array;
    w_array = w.array;
    xl = x & 16383;
    xh = x >> 14;
    $tmp158 = --n;
    $tmp157 = $tmp158 >= 0;
    while ($tmp157) {
        var l, $tmp159, h, $tmp160, $tmp161, m, $tmp162, $tmp163, $tmp164, $tmp165, $tmp166, $tmp167, $tmp168, $tmp169, $tmp170, $tmp171, $tmp172, $tmp173, $tmp174, $tmp157, $tmp175;
        $tmp159 = this_array[i];
        l = $tmp159 & 16383;
        $tmp161 = i++;
        $tmp160 = this_array[$tmp161];
        h = $tmp160 >> 14;
        $tmp162 = xh * l;
        $tmp163 = h * xl;
        m = $tmp162 + $tmp163;
        $tmp166 = xl * l;
        $tmp168 = m & 16383;
        $tmp167 = $tmp168 << 14;
        $tmp165 = $tmp166 + $tmp167;
        $tmp169 = w_array[j];
        $tmp164 = $tmp165 + $tmp169;
        l = $tmp164 + c;
        $tmp171 = l >> 28;
        $tmp172 = m >> 14;
        $tmp170 = $tmp171 + $tmp172;
        $tmp173 = xh * h;
        c = $tmp170 + $tmp173;
        $tmp174 = j++;
        w_array[$tmp174] = l & 268435455;
        $tmp175 = --n;
        $tmp157 = $tmp175 >= 0;
    }
    return c;
}
function am4(i, x, w, j, c, n) {
    var this_array, $tmp176, w_array, xl, $tmp177, $tmp178;
    $tmp176 = this;
    this_array = $tmp176.array;
    w_array = w.array;
    xl = x & 8191;
    xh = x >> 13;
    $tmp178 = --n;
    $tmp177 = $tmp178 >= 0;
    while ($tmp177) {
        var l, $tmp179, h, $tmp180, $tmp181, m, $tmp182, $tmp183, $tmp184, $tmp185, $tmp186, $tmp187, $tmp188, $tmp189, $tmp190, $tmp191, $tmp192, $tmp193, $tmp194, $tmp177, $tmp195;
        $tmp179 = this_array[i];
        l = $tmp179 & 8191;
        $tmp181 = i++;
        $tmp180 = this_array[$tmp181];
        h = $tmp180 >> 13;
        $tmp182 = xh * l;
        $tmp183 = h * xl;
        m = $tmp182 + $tmp183;
        $tmp186 = xl * l;
        $tmp188 = m & 8191;
        $tmp187 = $tmp188 << 13;
        $tmp185 = $tmp186 + $tmp187;
        $tmp189 = w_array[j];
        $tmp184 = $tmp185 + $tmp189;
        l = $tmp184 + c;
        $tmp191 = l >> 26;
        $tmp192 = m >> 13;
        $tmp190 = $tmp191 + $tmp192;
        $tmp193 = xh * h;
        c = $tmp190 + $tmp193;
        $tmp194 = j++;
        w_array[$tmp194] = l & 67108863;
        $tmp195 = --n;
        $tmp177 = $tmp195 >= 0;
    }
    return c;
}
setupEngine = function (fn, bits) {
    var $tmp196, $tmp197, $tmp198;
    $tmp196 = BigInteger.prototype;
    $tmp196.am = fn;
    dbits = bits;
    BI_DB = dbits;
    $tmp197 = 1 << dbits;
    BI_DM = $tmp197 - 1;
    BI_DV = 1 << dbits;
    BI_FP = 52;
    BI_FV = Math.pow(2, BI_FP);
    BI_F1 = BI_FP - dbits;
    $tmp198 = 2 * dbits;
    BI_F2 = $tmp198 - BI_FP;
};
BI_RM = '0123456789abcdefghijklmnopqrstuvwxyz';
BI_RC = new Array();
$tmp1 = '0';
rr = $tmp1.charCodeAt(0);
$tmp2 = vv = 0;
$tmp4 = vv <= 9;
for (; $tmp4;) {
    var $tmp199, $tmp3, $tmp4;
    $tmp199 = rr++;
    BI_RC[$tmp199] = vv;
    $tmp3 = ++vv;
    $tmp4 = vv <= 9;
}
$tmp5 = 'a';
rr = $tmp5.charCodeAt(0);
$tmp6 = vv = 10;
$tmp8 = vv < 36;
for (; $tmp8;) {
    var $tmp200, $tmp7, $tmp8;
    $tmp200 = rr++;
    BI_RC[$tmp200] = vv;
    $tmp7 = ++vv;
    $tmp8 = vv < 36;
}
$tmp9 = 'A';
rr = $tmp9.charCodeAt(0);
$tmp10 = vv = 10;
$tmp12 = vv < 36;
for (; $tmp12;) {
    var $tmp201, $tmp11, $tmp12;
    $tmp201 = rr++;
    BI_RC[$tmp201] = vv;
    $tmp11 = ++vv;
    $tmp12 = vv < 36;
}
function int2char(n) {
    var $tmp202;
    $tmp202 = BI_RM.charAt(n);
    return $tmp202;
}
function intAt(s, i) {
    var c, $tmp203, $tmp204, $tmp1545;
    $tmp203 = s.charCodeAt(i);
    c = BI_RC[$tmp203];
    $tmp1545 = c == null;
    if ($tmp1545) {
        $tmp204 = -1;
    } else {
        $tmp204 = c;
    }
    return $tmp204;
}
function bnpCopyTo(r) {
    var this_array, $tmp205, r_array, i, $tmp206, $tmp207, $tmp209, $tmp210, $tmp211;
    $tmp205 = this;
    this_array = $tmp205.array;
    r_array = r.array;
    $tmp207 = this;
    $tmp206 = $tmp207.t;
    i = $tmp206 - 1;
    $tmp209 = i >= 0;
    for (; $tmp209;) {
        r_array[i] = this_array[i];
        var $tmp208, $tmp209;
        $tmp208 = --i;
        $tmp209 = i >= 0;
    }
    $tmp210 = this;
    r.t = $tmp210.t;
    $tmp211 = this;
    r.s = $tmp211.s;
}
function bnpFromInt(x) {
    var this_array, $tmp212, $tmp213, $tmp214, $tmp1546, $tmp215;
    $tmp212 = this;
    this_array = $tmp212.array;
    $tmp213 = this;
    $tmp213.t = 1;
    $tmp214 = this;
    $tmp1546 = x < 0;
    if ($tmp1546) {
        $tmp214.s = -1;
    } else {
        $tmp214.s = 0;
    }
    $tmp215 = x > 0;
    if ($tmp215) {
        this_array[0] = x;
    } else {
        var $tmp1547, $tmp1548;
        $tmp1548 = -1;
        $tmp1547 = x < $tmp1548;
        if ($tmp1547) {
            this_array[0] = x + DV;
        } else {
            var $tmp1549;
            $tmp1549 = this;
            $tmp1549.t = 0;
        }
    }
}
function nbv(i) {
    var r, $tmp216;
    r = nbi();
    $tmp216 = r.fromInt(i);
    return r;
}
function bnpFromString(s, b) {
    var this_array, $tmp217, k, $tmp218, $tmp219, $tmp220, i, $tmp221, $tmp222, $tmp223, $tmp224, $tmp225;
    $tmp217 = this;
    this_array = $tmp217.array;
    $tmp218 = b == 16;
    if ($tmp218) {
        k = 4;
    } else {
        var $tmp1550;
        $tmp1550 = b == 8;
        if ($tmp1550) {
            k = 3;
        } else {
            var $tmp1551;
            $tmp1551 = b == 256;
            if ($tmp1551) {
                k = 8;
            } else {
                var $tmp1552;
                $tmp1552 = b == 2;
                if ($tmp1552) {
                    k = 1;
                } else {
                    var $tmp1553;
                    $tmp1553 = b == 32;
                    if ($tmp1553) {
                        k = 5;
                    } else {
                        var $tmp1554;
                        $tmp1554 = b == 4;
                        if ($tmp1554) {
                            k = 2;
                        } else {
                            var $tmp226, $tmp227;
                            $tmp227 = this;
                            $tmp226 = $tmp227.fromRadix(s, b);
                            return;
                        }
                    }
                }
            }
        }
    }
    $tmp219 = this;
    $tmp219.t = 0;
    $tmp220 = this;
    $tmp220.s = 0;
    i = s.length;
    mi = false;
    sh = 0;
    $tmp222 = --i;
    $tmp221 = $tmp222 >= 0;
    while ($tmp221) {
        var x, $tmp1555, $tmp228, $tmp229, $tmp230, $tmp221, $tmp231;
        $tmp1555 = k == 8;
        if ($tmp1555) {
            var $tmp1556;
            $tmp1556 = s[i];
            x = $tmp1556 & 255;
        } else {
            x = intAt(s, i);
        }
        $tmp228 = x < 0;
        if ($tmp228) {
            var $tmp232, $tmp233;
            $tmp233 = s.charAt(i);
            $tmp232 = $tmp233 == '-';
            if ($tmp232) {
                mi = true;
            } else {
            }
            continue;
        } else {
        }
        mi = false;
        $tmp229 = sh == 0;
        if ($tmp229) {
            var $tmp1557, $tmp1558;
            $tmp1558 = this;
            $tmp1557 = $tmp1558.t++;
            this_array[$tmp1557] = x;
        } else {
            var $tmp1559, $tmp1560;
            $tmp1560 = sh + k;
            $tmp1559 = $tmp1560 > BI_DB;
            if ($tmp1559) {
                var $tmp234, $tmp235, $tmp236, $tmp237, $tmp238, $tmp239, $tmp240, $tmp241, $tmp242, $tmp243;
                $tmp236 = this;
                $tmp235 = $tmp236.t;
                $tmp234 = $tmp235 - 1;
                $tmp240 = BI_DB - sh;
                $tmp239 = 1 << $tmp240;
                $tmp238 = $tmp239 - 1;
                $tmp237 = x & $tmp238;
                this_array[$tmp234] |= $tmp237 << sh;
                $tmp242 = this;
                $tmp241 = $tmp242.t++;
                $tmp243 = BI_DB - sh;
                this_array[$tmp241] = x >> $tmp243;
            } else {
                var $tmp1561, $tmp1562, $tmp1563;
                $tmp1563 = this;
                $tmp1562 = $tmp1563.t;
                $tmp1561 = $tmp1562 - 1;
                this_array[$tmp1561] |= x << sh;
            }
        }
        sh += k;
        $tmp230 = sh >= BI_DB;
        if ($tmp230) {
            sh -= BI_DB;
        } else {
        }
        $tmp231 = --i;
        $tmp221 = $tmp231 >= 0;
    }
    $tmp223 = k == 8 && (s[0] & 128) != 0;
    if ($tmp223) {
        var $tmp244, $tmp245;
        $tmp244 = this;
        $tmp244.s = -1;
        $tmp245 = sh > 0;
        if ($tmp245) {
            var $tmp1564, $tmp1565, $tmp1566, $tmp1567, $tmp1568, $tmp1569;
            $tmp1566 = this;
            $tmp1565 = $tmp1566.t;
            $tmp1564 = $tmp1565 - 1;
            $tmp1569 = BI_DB - sh;
            $tmp1568 = 1 << $tmp1569;
            $tmp1567 = $tmp1568 - 1;
            this_array[$tmp1564] |= $tmp1567 << sh;
        } else {
        }
    } else {
    }
    $tmp225 = this;
    $tmp224 = $tmp225.clamp();
    if (mi) {
        var $tmp1570, $tmp1571, $tmp1572, $tmp1573;
        $tmp1571 = BigInteger.ZERO;
        $tmp1572 = this;
        $tmp1573 = this;
        $tmp1570 = $tmp1571.subTo($tmp1572, $tmp1573);
    } else {
    }
}
function bnpClamp() {
    var this_array, $tmp246, c, $tmp247, $tmp248, $tmp249;
    $tmp246 = this;
    this_array = $tmp246.array;
    $tmp248 = this;
    $tmp247 = $tmp248.s;
    c = $tmp247 & BI_DM;
    $tmp249 = this.t > 0 && this_array[this.t - 1] == c;
    while ($tmp249) {
        var $tmp250, $tmp251, $tmp249;
        $tmp251 = this;
        $tmp250 = --$tmp251.t;
        $tmp249 = this.t > 0 && this_array[this.t - 1] == c;
    }
}
function bnToString(b) {
    var this_array, $tmp252, $tmp253, $tmp254, $tmp255, k, $tmp256, km, $tmp257, $tmp258, p, $tmp259, $tmp260, $tmp261, $tmp262, $tmp263;
    $tmp252 = this;
    this_array = $tmp252.array;
    $tmp255 = this;
    $tmp254 = $tmp255.s;
    $tmp253 = $tmp254 < 0;
    if ($tmp253) {
        var $tmp1574, $tmp1575, $tmp1576, $tmp1577;
        $tmp1577 = this;
        $tmp1576 = $tmp1577.negate();
        $tmp1575 = $tmp1576.toString(b);
        $tmp1574 = '-' + $tmp1575;
        return $tmp1574;
    } else {
    }
    $tmp256 = b == 16;
    if ($tmp256) {
        k = 4;
    } else {
        var $tmp1578;
        $tmp1578 = b == 8;
        if ($tmp1578) {
            k = 3;
        } else {
            var $tmp1579;
            $tmp1579 = b == 2;
            if ($tmp1579) {
                k = 1;
            } else {
                var $tmp1580;
                $tmp1580 = b == 32;
                if ($tmp1580) {
                    k = 5;
                } else {
                    var $tmp1581;
                    $tmp1581 = b == 4;
                    if ($tmp1581) {
                        k = 2;
                    } else {
                        var $tmp1582, $tmp1583;
                        $tmp1583 = this;
                        $tmp1582 = $tmp1583.toRadix(b);
                        return $tmp1582;
                    }
                }
            }
        }
    }
    $tmp257 = 1 << k;
    km = $tmp257 - 1;
    m = false;
    r = '';
    $tmp258 = this;
    i = $tmp258.t;
    $tmp260 = i * BI_DB;
    $tmp259 = $tmp260 % k;
    p = BI_DB - $tmp259;
    $tmp262 = i--;
    $tmp261 = $tmp262 > 0;
    if ($tmp261) {
        var $tmp264, $tmp265;
        $tmp264 = p < BI_DB && (d = this_array[i] >> p) > 0;
        if ($tmp264) {
            m = true;
            r = int2char(d);
        } else {
        }
        $tmp265 = i >= 0;
        while ($tmp265) {
            var $tmp266, $tmp267, $tmp265;
            $tmp266 = p < k;
            if ($tmp266) {
                var $tmp268, $tmp269, $tmp270, $tmp271, $tmp272, $tmp273, $tmp274, $tmp275;
                $tmp269 = this_array[i];
                $tmp271 = 1 << p;
                $tmp270 = $tmp271 - 1;
                $tmp268 = $tmp269 & $tmp270;
                $tmp272 = k - p;
                d = $tmp268 << $tmp272;
                $tmp274 = --i;
                $tmp273 = this_array[$tmp274];
                $tmp275 = p += BI_DB - k;
                d |= $tmp273 >> $tmp275;
            } else {
                var $tmp276, $tmp277, $tmp278, $tmp279;
                $tmp277 = this_array[i];
                $tmp278 = p -= k;
                $tmp276 = $tmp277 >> $tmp278;
                d = $tmp276 & km;
                $tmp279 = p <= 0;
                if ($tmp279) {
                    p += BI_DB;
                    var $tmp280;
                    $tmp280 = --i;
                } else {
                }
            }
            $tmp267 = d > 0;
            if ($tmp267) {
                m = true;
            } else {
            }
            if (m) {
                r += int2char(d);
            } else {
            }
            $tmp265 = i >= 0;
        }
    } else {
    }
    if (m) {
        $tmp263 = r;
    } else {
        $tmp263 = '0';
    }
    return $tmp263;
}
function bnNegate() {
    var r, $tmp281, $tmp282, $tmp283;
    r = nbi();
    $tmp282 = BigInteger.ZERO;
    $tmp283 = this;
    $tmp281 = $tmp282.subTo($tmp283, r);
    return r;
}
function bnAbs() {
    var $tmp284, $tmp1584, $tmp1585, $tmp1586;
    $tmp1586 = this;
    $tmp1585 = $tmp1586.s;
    $tmp1584 = $tmp1585 < 0;
    if ($tmp1584) {
        var $tmp1587;
        $tmp1587 = this;
        $tmp284 = $tmp1587.negate();
    } else {
        $tmp284 = this;
    }
    return $tmp284;
}
function bnCompareTo(a) {
    var this_array, $tmp285, a_array, r, $tmp286, $tmp287, $tmp288, $tmp289, i, $tmp290, $tmp291, $tmp292, $tmp293, $tmp294;
    $tmp285 = this;
    this_array = $tmp285.array;
    a_array = a.array;
    $tmp287 = this;
    $tmp286 = $tmp287.s;
    $tmp288 = a.s;
    r = $tmp286 - $tmp288;
    $tmp289 = r != 0;
    if ($tmp289) {
        return r;
    } else {
    }
    $tmp290 = this;
    i = $tmp290.t;
    $tmp291 = a.t;
    r = i - $tmp291;
    $tmp292 = r != 0;
    if ($tmp292) {
        return r;
    } else {
    }
    $tmp294 = --i;
    $tmp293 = $tmp294 >= 0;
    while ($tmp293) {
        var $tmp295, $tmp296, $tmp293, $tmp297;
        $tmp296 = r = this_array[i] - a_array[i];
        $tmp295 = $tmp296 != 0;
        if ($tmp295) {
            return r;
        } else {
        }
        $tmp297 = --i;
        $tmp293 = $tmp297 >= 0;
    }
    return 0;
}
function nbits(x) {
    var r, t, $tmp298, $tmp299, $tmp300, $tmp301, $tmp302, $tmp303, $tmp304, $tmp305, $tmp306, $tmp307;
    r = 1;
    $tmp299 = t = x >>> 16;
    $tmp298 = $tmp299 != 0;
    if ($tmp298) {
        x = t;
        r += 16;
    } else {
    }
    $tmp301 = t = x >> 8;
    $tmp300 = $tmp301 != 0;
    if ($tmp300) {
        x = t;
        r += 8;
    } else {
    }
    $tmp303 = t = x >> 4;
    $tmp302 = $tmp303 != 0;
    if ($tmp302) {
        x = t;
        r += 4;
    } else {
    }
    $tmp305 = t = x >> 2;
    $tmp304 = $tmp305 != 0;
    if ($tmp304) {
        x = t;
        r += 2;
    } else {
    }
    $tmp307 = t = x >> 1;
    $tmp306 = $tmp307 != 0;
    if ($tmp306) {
        x = t;
        r += 1;
    } else {
    }
    return r;
}
function bnBitLength() {
    var this_array, $tmp308, $tmp309, $tmp310, $tmp311, r, $tmp312, $tmp313, $tmp314, $tmp315, $tmp316, $tmp317, $tmp318, $tmp319, $tmp320, $tmp321, $tmp322, $tmp323, $tmp324;
    $tmp308 = this;
    this_array = $tmp308.array;
    $tmp311 = this;
    $tmp310 = $tmp311.t;
    $tmp309 = $tmp310 <= 0;
    if ($tmp309) {
        return 0;
    } else {
    }
    $tmp315 = this;
    $tmp314 = $tmp315.t;
    $tmp313 = $tmp314 - 1;
    $tmp312 = BI_DB * $tmp313;
    $tmp321 = this;
    $tmp320 = $tmp321.t;
    $tmp319 = $tmp320 - 1;
    $tmp318 = this_array[$tmp319];
    $tmp324 = this;
    $tmp323 = $tmp324.s;
    $tmp322 = $tmp323 & BI_DM;
    $tmp317 = $tmp318 ^ $tmp322;
    $tmp316 = nbits($tmp317);
    r = $tmp312 + $tmp316;
    return r;
}
function bnpDLShiftTo(n, r) {
    var this_array, $tmp325, r_array, i, $tmp326, $tmp328, $tmp329, $tmp331, $tmp332, $tmp333, $tmp334;
    $tmp325 = this;
    this_array = $tmp325.array;
    r_array = r.array;
    $tmp326 = i = this.t - 1;
    $tmp328 = i >= 0;
    for (; $tmp328;) {
        var $tmp335, $tmp327, $tmp328;
        $tmp335 = i + n;
        r_array[$tmp335] = this_array[i];
        $tmp327 = --i;
        $tmp328 = i >= 0;
    }
    $tmp329 = i = n - 1;
    $tmp331 = i >= 0;
    for (; $tmp331;) {
        r_array[i] = 0;
        var $tmp330, $tmp331;
        $tmp330 = --i;
        $tmp331 = i >= 0;
    }
    $tmp333 = this;
    $tmp332 = $tmp333.t;
    r.t = $tmp332 + n;
    $tmp334 = this;
    r.s = $tmp334.s;
}
function bnpDRShiftTo(n, r) {
    var this_array, $tmp336, r_array, i, $tmp338, $tmp339, $tmp340, $tmp341, $tmp342, $tmp343, $tmp344;
    $tmp336 = this;
    this_array = $tmp336.array;
    r_array = r.array;
    i = n;
    $tmp340 = this;
    $tmp339 = $tmp340.t;
    $tmp338 = i < $tmp339;
    for (; $tmp338;) {
        var $tmp345, $tmp337, $tmp338, $tmp346, $tmp347;
        $tmp345 = i - n;
        r_array[$tmp345] = this_array[i];
        $tmp337 = ++i;
        $tmp347 = this;
        $tmp346 = $tmp347.t;
        $tmp338 = i < $tmp346;
    }
    $tmp343 = this;
    $tmp342 = $tmp343.t;
    $tmp341 = $tmp342 - n;
    r.t = Math.max($tmp341, 0);
    $tmp344 = this;
    r.s = $tmp344.s;
}
function bnpLShiftTo(n, r) {
    var this_array, $tmp348, r_array, bs, cbs, bm, $tmp349, ds, $tmp350, $tmp351, $tmp352, $tmp353, $tmp354, $tmp356, $tmp357, $tmp359, $tmp360, $tmp361, $tmp362, $tmp363, $tmp364;
    $tmp348 = this;
    this_array = $tmp348.array;
    r_array = r.array;
    bs = n % BI_DB;
    cbs = BI_DB - bs;
    $tmp349 = 1 << cbs;
    bm = $tmp349 - 1;
    $tmp350 = n / BI_DB;
    ds = Math.floor($tmp350);
    $tmp353 = this;
    $tmp352 = $tmp353.s;
    $tmp351 = $tmp352 << bs;
    c = $tmp351 & BI_DM;
    $tmp354 = i = this.t - 1;
    $tmp356 = i >= 0;
    for (; $tmp356;) {
        var $tmp365, $tmp366, $tmp367, $tmp368, $tmp369, $tmp370, $tmp355, $tmp356;
        $tmp366 = i + ds;
        $tmp365 = $tmp366 + 1;
        $tmp368 = this_array[i];
        $tmp367 = $tmp368 >> cbs;
        r_array[$tmp365] = $tmp367 | c;
        $tmp370 = this_array[i];
        $tmp369 = $tmp370 & bm;
        c = $tmp369 << bs;
        $tmp355 = --i;
        $tmp356 = i >= 0;
    }
    $tmp357 = i = ds - 1;
    $tmp359 = i >= 0;
    for (; $tmp359;) {
        r_array[i] = 0;
        var $tmp358, $tmp359;
        $tmp358 = --i;
        $tmp359 = i >= 0;
    }
    r_array[ds] = c;
    $tmp362 = this;
    $tmp361 = $tmp362.t;
    $tmp360 = $tmp361 + ds;
    r.t = $tmp360 + 1;
    $tmp363 = this;
    r.s = $tmp363.s;
    $tmp364 = r.clamp();
}
function bnpRShiftTo(n, r) {
    var this_array, $tmp371, r_array, $tmp372, ds, $tmp373, $tmp374, $tmp375, $tmp376, bs, cbs, bm, $tmp377, $tmp378, i, $tmp380, $tmp381, $tmp382, $tmp383, $tmp384, $tmp385, $tmp386;
    $tmp371 = this;
    this_array = $tmp371.array;
    r_array = r.array;
    $tmp372 = this;
    r.s = $tmp372.s;
    $tmp373 = n / BI_DB;
    ds = Math.floor($tmp373);
    $tmp376 = this;
    $tmp375 = $tmp376.t;
    $tmp374 = ds >= $tmp375;
    if ($tmp374) {
        r.t = 0;
        return;
    } else {
    }
    bs = n % BI_DB;
    cbs = BI_DB - bs;
    $tmp377 = 1 << bs;
    bm = $tmp377 - 1;
    $tmp378 = this_array[ds];
    r_array[0] = $tmp378 >> bs;
    i = ds + 1;
    $tmp382 = this;
    $tmp381 = $tmp382.t;
    $tmp380 = i < $tmp381;
    for (; $tmp380;) {
        var $tmp387, $tmp388, $tmp389, $tmp390, $tmp391, $tmp392, $tmp379, $tmp380, $tmp393, $tmp394;
        $tmp388 = i - ds;
        $tmp387 = $tmp388 - 1;
        $tmp390 = this_array[i];
        $tmp389 = $tmp390 & bm;
        r_array[$tmp387] |= $tmp389 << cbs;
        $tmp391 = i - ds;
        $tmp392 = this_array[i];
        r_array[$tmp391] = $tmp392 >> bs;
        $tmp379 = ++i;
        $tmp394 = this;
        $tmp393 = $tmp394.t;
        $tmp380 = i < $tmp393;
    }
    $tmp383 = bs > 0;
    if ($tmp383) {
        var $tmp1588, $tmp1589, $tmp1590, $tmp1591, $tmp1592, $tmp1593, $tmp1594;
        $tmp1591 = this;
        $tmp1590 = $tmp1591.t;
        $tmp1589 = $tmp1590 - ds;
        $tmp1588 = $tmp1589 - 1;
        $tmp1594 = this;
        $tmp1593 = $tmp1594.s;
        $tmp1592 = $tmp1593 & bm;
        r_array[$tmp1588] |= $tmp1592 << cbs;
    } else {
    }
    $tmp385 = this;
    $tmp384 = $tmp385.t;
    r.t = $tmp384 - ds;
    $tmp386 = r.clamp();
}
function bnpSubTo(a, r) {
    var this_array, $tmp395, r_array, a_array, i, $tmp396, $tmp397, $tmp398, $tmp399, $tmp400, $tmp401, $tmp402, $tmp403, $tmp1595, $tmp404, $tmp405, $tmp406;
    $tmp395 = this;
    this_array = $tmp395.array;
    r_array = r.array;
    a_array = a.array;
    i = 0;
    c = 0;
    $tmp396 = a.t;
    $tmp398 = this;
    $tmp397 = $tmp398.t;
    m = Math.min($tmp396, $tmp397);
    $tmp399 = i < m;
    while ($tmp399) {
        var $tmp407, $tmp408, $tmp409, $tmp399;
        $tmp407 = this_array[i];
        $tmp408 = a_array[i];
        c += $tmp407 - $tmp408;
        $tmp409 = i++;
        r_array[$tmp409] = c & BI_DM;
        c >>= BI_DB;
        $tmp399 = i < m;
    }
    $tmp401 = a.t;
    $tmp403 = this;
    $tmp402 = $tmp403.t;
    $tmp400 = $tmp401 < $tmp402;
    if ($tmp400) {
        c -= a.s;
        var $tmp410, $tmp411, $tmp412, $tmp413;
        $tmp412 = this;
        $tmp411 = $tmp412.t;
        $tmp410 = i < $tmp411;
        while ($tmp410) {
            c += this_array[i];
            var $tmp414, $tmp410, $tmp415, $tmp416;
            $tmp414 = i++;
            r_array[$tmp414] = c & BI_DM;
            c >>= BI_DB;
            $tmp416 = this;
            $tmp415 = $tmp416.t;
            $tmp410 = i < $tmp415;
        }
        $tmp413 = this;
        c += $tmp413.s;
    } else {
        var $tmp417, $tmp418, $tmp419;
        $tmp417 = this;
        c += $tmp417.s;
        $tmp419 = a.t;
        $tmp418 = i < $tmp419;
        while ($tmp418) {
            c -= a_array[i];
            var $tmp420, $tmp418, $tmp421;
            $tmp420 = i++;
            r_array[$tmp420] = c & BI_DM;
            c >>= BI_DB;
            $tmp421 = a.t;
            $tmp418 = i < $tmp421;
        }
        c -= a.s;
    }
    $tmp1595 = c < 0;
    if ($tmp1595) {
        r.s = -1;
    } else {
        r.s = 0;
    }
    $tmp405 = -1;
    $tmp404 = c < $tmp405;
    if ($tmp404) {
        var $tmp1596;
        $tmp1596 = i++;
        r_array[$tmp1596] = BI_DV + c;
    } else {
        var $tmp1597;
        $tmp1597 = c > 0;
        if ($tmp1597) {
            var $tmp1598;
            $tmp1598 = i++;
            r_array[$tmp1598] = c;
        } else {
        }
    }
    r.t = i;
    $tmp406 = r.clamp();
}
function bnpMultiplyTo(a, r) {
    var this_array, $tmp422, r_array, x, $tmp423, y_array, i, $tmp424, $tmp425, $tmp426, $tmp427, $tmp429, $tmp430, $tmp431, $tmp432, $tmp433, $tmp434, $tmp435;
    $tmp422 = this;
    this_array = $tmp422.array;
    r_array = r.array;
    $tmp423 = this;
    x = $tmp423.abs();
    y = a.abs();
    y_array = y.array;
    i = x.t;
    $tmp424 = y.t;
    r.t = i + $tmp424;
    $tmp426 = --i;
    $tmp425 = $tmp426 >= 0;
    while ($tmp425) {
        r_array[i] = 0;
        var $tmp425, $tmp436;
        $tmp436 = --i;
        $tmp425 = $tmp436 >= 0;
    }
    $tmp427 = i = 0;
    $tmp430 = y.t;
    $tmp429 = i < $tmp430;
    for (; $tmp429;) {
        var $tmp437, $tmp438, $tmp439, $tmp440, $tmp428, $tmp429, $tmp441;
        $tmp438 = x.t;
        $tmp437 = i + $tmp438;
        $tmp439 = y_array[i];
        $tmp440 = x.t;
        r_array[$tmp437] = x.am(0, $tmp439, r, i, 0, $tmp440);
        $tmp428 = ++i;
        $tmp441 = y.t;
        $tmp429 = i < $tmp441;
    }
    r.s = 0;
    $tmp431 = r.clamp();
    $tmp434 = this;
    $tmp433 = $tmp434.s;
    $tmp435 = a.s;
    $tmp432 = $tmp433 != $tmp435;
    if ($tmp432) {
        var $tmp1599, $tmp1600;
        $tmp1600 = BigInteger.ZERO;
        $tmp1599 = $tmp1600.subTo(r, r);
    } else {
    }
}
function bnpSquareTo(r) {
    var x, $tmp442, x_array, r_array, i, $tmp443, $tmp444, $tmp445, $tmp447, $tmp448, $tmp449, $tmp450, $tmp451, $tmp452;
    $tmp442 = this;
    x = $tmp442.abs();
    x_array = x.array;
    r_array = r.array;
    i = r.t = 2 * x.t;
    $tmp444 = --i;
    $tmp443 = $tmp444 >= 0;
    while ($tmp443) {
        r_array[i] = 0;
        var $tmp443, $tmp453;
        $tmp453 = --i;
        $tmp443 = $tmp453 >= 0;
    }
    $tmp445 = i = 0;
    $tmp449 = x.t;
    $tmp448 = $tmp449 - 1;
    $tmp447 = i < $tmp448;
    for (; $tmp447;) {
        var c, $tmp454, $tmp455, $tmp456, $tmp457, $tmp446, $tmp447, $tmp458, $tmp459;
        $tmp454 = x_array[i];
        $tmp455 = 2 * i;
        c = x.am(i, $tmp454, r, $tmp455, 0, 1);
        $tmp457 = r_array[i + x.t] += x.am(i + 1, 2 * x_array[i], r, 2 * i + 1, c, x.t - i - 1);
        $tmp456 = $tmp457 >= BI_DV;
        if ($tmp456) {
            var $tmp460, $tmp461, $tmp462, $tmp463, $tmp464;
            $tmp461 = x.t;
            $tmp460 = i + $tmp461;
            r_array[$tmp460] -= BI_DV;
            $tmp464 = x.t;
            $tmp463 = i + $tmp464;
            $tmp462 = $tmp463 + 1;
            r_array[$tmp462] = 1;
        } else {
        }
        $tmp446 = ++i;
        $tmp459 = x.t;
        $tmp458 = $tmp459 - 1;
        $tmp447 = i < $tmp458;
    }
    $tmp451 = r.t;
    $tmp450 = $tmp451 > 0;
    if ($tmp450) {
        var $tmp1601, $tmp1602, $tmp1603, $tmp1604;
        $tmp1602 = r.t;
        $tmp1601 = $tmp1602 - 1;
        $tmp1603 = x_array[i];
        $tmp1604 = 2 * i;
        r_array[$tmp1601] += x.am(i, $tmp1603, r, $tmp1604, 0, 1);
    } else {
    }
    r.s = 0;
    $tmp452 = r.clamp();
}
function bnpDivRemTo(m, q, r) {
    var pm, $tmp465, $tmp466, pt, $tmp467, $tmp468, $tmp469, $tmp470, $tmp471, y, $tmp472, pm_array, nsh, $tmp473, $tmp474, $tmp475, $tmp476, $tmp477, ys, y_array, y0, $tmp478, $tmp479, yt, $tmp480, $tmp481, $tmp482, $tmp1605, d1, $tmp483, i, $tmp1606, $tmp484, r_array, $tmp485, $tmp486, $tmp487, $tmp488, $tmp489, $tmp490, $tmp491, $tmp492, $tmp493, $tmp494, $tmp495, $tmp496, $tmp497;
    pm = m.abs();
    $tmp466 = pm.t;
    $tmp465 = $tmp466 <= 0;
    if ($tmp465) {
        return;
    } else {
    }
    $tmp467 = this;
    pt = $tmp467.abs();
    $tmp469 = pt.t;
    $tmp470 = pm.t;
    $tmp468 = $tmp469 < $tmp470;
    if ($tmp468) {
        var $tmp498, $tmp499;
        $tmp498 = q != null;
        if ($tmp498) {
            var $tmp1607;
            $tmp1607 = q.fromInt(0);
        } else {
        }
        $tmp499 = r != null;
        if ($tmp499) {
            var $tmp1608, $tmp1609;
            $tmp1609 = this;
            $tmp1608 = $tmp1609.copyTo(r);
        } else {
        }
        return;
    } else {
    }
    $tmp471 = r == null;
    if ($tmp471) {
        r = nbi();
    } else {
    }
    y = nbi();
    $tmp472 = this;
    ts = $tmp472.s;
    ms = m.s;
    pm_array = pm.array;
    $tmp476 = pm.t;
    $tmp475 = $tmp476 - 1;
    $tmp474 = pm_array[$tmp475];
    $tmp473 = nbits($tmp474);
    nsh = BI_DB - $tmp473;
    $tmp477 = nsh > 0;
    if ($tmp477) {
        var $tmp500, $tmp501;
        $tmp500 = pm.lShiftTo(nsh, y);
        $tmp501 = pt.lShiftTo(nsh, r);
    } else {
        var $tmp502, $tmp503;
        $tmp502 = pm.copyTo(y);
        $tmp503 = pt.copyTo(r);
    }
    ys = y.t;
    y_array = y.array;
    $tmp478 = ys - 1;
    y0 = y_array[$tmp478];
    $tmp479 = y0 == 0;
    if ($tmp479) {
        return;
    } else {
    }
    $tmp481 = 1 << BI_F1;
    $tmp480 = y0 * $tmp481;
    $tmp1605 = ys > 1;
    if ($tmp1605) {
        var $tmp1610, $tmp1611;
        $tmp1611 = ys - 2;
        $tmp1610 = y_array[$tmp1611];
        $tmp482 = $tmp1610 >> BI_F2;
    } else {
        $tmp482 = 0;
    }
    yt = $tmp480 + $tmp482;
    d1 = BI_FV / yt;
    $tmp483 = 1 << BI_F1;
    d2 = $tmp483 / yt;
    e = 1 << BI_F2;
    i = r.t;
    j = i - ys;
    $tmp1606 = q == null;
    if ($tmp1606) {
        t = nbi();
    } else {
        t = q;
    }
    $tmp484 = y.dlShiftTo(j, t);
    r_array = r.array;
    $tmp486 = r.compareTo(t);
    $tmp485 = $tmp486 >= 0;
    if ($tmp485) {
        var $tmp504, $tmp505;
        $tmp504 = r.t++;
        r_array[$tmp504] = 1;
        $tmp505 = r.subTo(t, r);
    } else {
    }
    $tmp488 = BigInteger.ONE;
    $tmp487 = $tmp488.dlShiftTo(ys, t);
    $tmp489 = t.subTo(y, y);
    $tmp491 = y.t;
    $tmp490 = $tmp491 < ys;
    while ($tmp490) {
        var $tmp506, $tmp490, $tmp507;
        $tmp506 = y.t++;
        y_array[$tmp506] = 0;
        $tmp507 = y.t;
        $tmp490 = $tmp507 < ys;
    }
    $tmp493 = --j;
    $tmp492 = $tmp493 >= 0;
    while ($tmp492) {
        var qd, $tmp1612, $tmp1613, $tmp1614, $tmp508, $tmp509, $tmp492, $tmp510;
        $tmp1614 = --i;
        $tmp1613 = r_array[$tmp1614];
        $tmp1612 = $tmp1613 == y0;
        if ($tmp1612) {
            qd = BI_DM;
        } else {
            var $tmp1615, $tmp1616, $tmp1617, $tmp1618, $tmp1619, $tmp1620, $tmp1621;
            $tmp1617 = r_array[i];
            $tmp1616 = $tmp1617 * d1;
            $tmp1621 = i - 1;
            $tmp1620 = r_array[$tmp1621];
            $tmp1619 = $tmp1620 + e;
            $tmp1618 = $tmp1619 * d2;
            $tmp1615 = $tmp1616 + $tmp1618;
            qd = Math.floor($tmp1615);
        }
        $tmp509 = r_array[i] += y.am(0, qd, r, j, 0, ys);
        $tmp508 = $tmp509 < qd;
        if ($tmp508) {
            var $tmp511, $tmp512, $tmp513, $tmp514, $tmp515;
            $tmp511 = y.dlShiftTo(j, t);
            $tmp512 = r.subTo(t, r);
            $tmp514 = r_array[i];
            $tmp515 = --qd;
            $tmp513 = $tmp514 < $tmp515;
            while ($tmp513) {
                var $tmp516, $tmp513, $tmp517, $tmp518;
                $tmp516 = r.subTo(t, r);
                $tmp517 = r_array[i];
                $tmp518 = --qd;
                $tmp513 = $tmp517 < $tmp518;
            }
        } else {
        }
        $tmp510 = --j;
        $tmp492 = $tmp510 >= 0;
    }
    $tmp494 = q != null;
    if ($tmp494) {
        var $tmp519, $tmp520;
        $tmp519 = r.drShiftTo(ys, q);
        $tmp520 = ts != ms;
        if ($tmp520) {
            var $tmp1622, $tmp1623;
            $tmp1623 = BigInteger.ZERO;
            $tmp1622 = $tmp1623.subTo(q, q);
        } else {
        }
    } else {
    }
    r.t = ys;
    $tmp495 = r.clamp();
    $tmp496 = nsh > 0;
    if ($tmp496) {
        var $tmp1624;
        $tmp1624 = r.rShiftTo(nsh, r);
    } else {
    }
    $tmp497 = ts < 0;
    if ($tmp497) {
        var $tmp1625, $tmp1626;
        $tmp1626 = BigInteger.ZERO;
        $tmp1625 = $tmp1626.subTo(r, r);
    } else {
    }
}
function bnMod(a) {
    var r, $tmp521, $tmp522, $tmp523, $tmp524;
    r = nbi();
    $tmp523 = this;
    $tmp522 = $tmp523.abs();
    $tmp521 = $tmp522.divRemTo(a, null, r);
    $tmp524 = this.s < 0 && r.compareTo(BigInteger.ZERO) > 0;
    if ($tmp524) {
        var $tmp1627;
        $tmp1627 = a.subTo(r, r);
    } else {
    }
    return r;
}
function Classic(m) {
    var $tmp525;
    $tmp525 = this;
    $tmp525.m = m;
}
function cConvert(x) {
    var $tmp526;
    $tmp526 = x.s < 0 || x.compareTo(this.m) >= 0;
    if ($tmp526) {
        var $tmp1628, $tmp1629, $tmp1630;
        $tmp1630 = this;
        $tmp1629 = $tmp1630.m;
        $tmp1628 = x.mod($tmp1629);
        return $tmp1628;
    } else {
        return x;
    }
}
function cRevert(x) {
    return x;
}
function cReduce(x) {
    var $tmp527, $tmp528, $tmp529;
    $tmp529 = this;
    $tmp528 = $tmp529.m;
    $tmp527 = x.divRemTo($tmp528, null, x);
}
function cMulTo(x, y, r) {
    var $tmp530, $tmp531, $tmp532;
    $tmp530 = x.multiplyTo(y, r);
    $tmp532 = this;
    $tmp531 = $tmp532.reduce(r);
}
function cSqrTo(x, r) {
    var $tmp533, $tmp534, $tmp535;
    $tmp533 = x.squareTo(r);
    $tmp535 = this;
    $tmp534 = $tmp535.reduce(r);
}
$tmp13 = Classic.prototype;
$tmp13.convert = cConvert;
$tmp14 = Classic.prototype;
$tmp14.revert = cRevert;
$tmp15 = Classic.prototype;
$tmp15.reduce = cReduce;
$tmp16 = Classic.prototype;
$tmp16.mulTo = cMulTo;
$tmp17 = Classic.prototype;
$tmp17.sqrTo = cSqrTo;
function bnpInvDigit() {
    var this_array, $tmp536, $tmp537, $tmp538, $tmp539, x, $tmp540, $tmp541, y, $tmp542, $tmp543, $tmp544, $tmp545, $tmp546, $tmp547, $tmp548, $tmp549, $tmp550, $tmp551, $tmp552, $tmp553, $tmp554, $tmp555, $tmp556, $tmp557, $tmp558, $tmp559, $tmp1631;
    $tmp536 = this;
    this_array = $tmp536.array;
    $tmp539 = this;
    $tmp538 = $tmp539.t;
    $tmp537 = $tmp538 < 1;
    if ($tmp537) {
        return 0;
    } else {
    }
    x = this_array[0];
    $tmp541 = x & 1;
    $tmp540 = $tmp541 == 0;
    if ($tmp540) {
        return 0;
    } else {
    }
    y = x & 3;
    $tmp545 = x & 15;
    $tmp544 = $tmp545 * y;
    $tmp543 = 2 - $tmp544;
    $tmp542 = y * $tmp543;
    y = $tmp542 & 15;
    $tmp549 = x & 255;
    $tmp548 = $tmp549 * y;
    $tmp547 = 2 - $tmp548;
    $tmp546 = y * $tmp547;
    y = $tmp546 & 255;
    $tmp554 = x & 65535;
    $tmp553 = $tmp554 * y;
    $tmp552 = $tmp553 & 65535;
    $tmp551 = 2 - $tmp552;
    $tmp550 = y * $tmp551;
    y = $tmp550 & 65535;
    $tmp558 = x * y;
    $tmp557 = $tmp558 % BI_DV;
    $tmp556 = 2 - $tmp557;
    $tmp555 = y * $tmp556;
    y = $tmp555 % BI_DV;
    $tmp1631 = y > 0;
    if ($tmp1631) {
        $tmp559 = BI_DV - y;
    } else {
        $tmp559 = -y;
    }
    return $tmp559;
}
function Montgomery(m) {
    var $tmp560, $tmp561, $tmp562, $tmp563, $tmp564, $tmp565, $tmp566, $tmp567, $tmp568, $tmp569, $tmp570, $tmp571, $tmp572;
    $tmp560 = this;
    $tmp560.m = m;
    $tmp561 = this;
    $tmp561.mp = m.invDigit();
    $tmp562 = this;
    $tmp564 = this;
    $tmp563 = $tmp564.mp;
    $tmp562.mpl = $tmp563 & 32767;
    $tmp565 = this;
    $tmp567 = this;
    $tmp566 = $tmp567.mp;
    $tmp565.mph = $tmp566 >> 15;
    $tmp568 = this;
    $tmp570 = BI_DB - 15;
    $tmp569 = 1 << $tmp570;
    $tmp568.um = $tmp569 - 1;
    $tmp571 = this;
    $tmp572 = m.t;
    $tmp571.mt2 = 2 * $tmp572;
}
function montConvert(x) {
    var r, $tmp573, $tmp574, $tmp575, $tmp576, $tmp577, $tmp578, $tmp579, $tmp580, $tmp581;
    r = nbi();
    $tmp574 = x.abs();
    $tmp577 = this;
    $tmp576 = $tmp577.m;
    $tmp575 = $tmp576.t;
    $tmp573 = $tmp574.dlShiftTo($tmp575, r);
    $tmp580 = this;
    $tmp579 = $tmp580.m;
    $tmp578 = r.divRemTo($tmp579, null, r);
    $tmp581 = x.s < 0 && r.compareTo(BigInteger.ZERO) > 0;
    if ($tmp581) {
        var $tmp1632, $tmp1633, $tmp1634;
        $tmp1634 = this;
        $tmp1633 = $tmp1634.m;
        $tmp1632 = $tmp1633.subTo(r, r);
    } else {
    }
    return r;
}
function montRevert(x) {
    var r, $tmp582, $tmp583, $tmp584;
    r = nbi();
    $tmp582 = x.copyTo(r);
    $tmp584 = this;
    $tmp583 = $tmp584.reduce(r);
    return r;
}
function montReduce(x) {
    var x_array, $tmp585, $tmp586, $tmp587, $tmp588, i, $tmp590, $tmp591, $tmp592, $tmp593, $tmp594, $tmp595, $tmp596, $tmp597, $tmp598, $tmp599, $tmp600, $tmp601, $tmp602;
    x_array = x.array;
    $tmp586 = x.t;
    $tmp588 = this;
    $tmp587 = $tmp588.mt2;
    $tmp585 = $tmp586 <= $tmp587;
    while ($tmp585) {
        var $tmp603, $tmp585, $tmp604, $tmp605, $tmp606;
        $tmp603 = x.t++;
        x_array[$tmp603] = 0;
        $tmp604 = x.t;
        $tmp606 = this;
        $tmp605 = $tmp606.mt2;
        $tmp585 = $tmp604 <= $tmp605;
    }
    i = 0;
    $tmp593 = this;
    $tmp592 = $tmp593.m;
    $tmp591 = $tmp592.t;
    $tmp590 = i < $tmp591;
    for (; $tmp590;) {
        var j, $tmp607, u0, $tmp608, $tmp609, $tmp610, $tmp611, $tmp612, $tmp613, $tmp614, $tmp615, $tmp616, $tmp617, $tmp618, $tmp619, $tmp620, $tmp621, $tmp622, $tmp623, $tmp624, $tmp625, $tmp626, $tmp627, $tmp628, $tmp629, $tmp630, $tmp631, $tmp632, $tmp633, $tmp634, $tmp589, $tmp590, $tmp635, $tmp636, $tmp637;
        $tmp607 = x_array[i];
        j = $tmp607 & 32767;
        $tmp611 = this;
        $tmp610 = $tmp611.mpl;
        $tmp609 = j * $tmp610;
        $tmp617 = this;
        $tmp616 = $tmp617.mph;
        $tmp615 = j * $tmp616;
        $tmp620 = x_array[i];
        $tmp619 = $tmp620 >> 15;
        $tmp622 = this;
        $tmp621 = $tmp622.mpl;
        $tmp618 = $tmp619 * $tmp621;
        $tmp614 = $tmp615 + $tmp618;
        $tmp624 = this;
        $tmp623 = $tmp624.um;
        $tmp613 = $tmp614 & $tmp623;
        $tmp612 = $tmp613 << 15;
        $tmp608 = $tmp609 + $tmp612;
        u0 = $tmp608 & BI_DM;
        $tmp627 = this;
        $tmp626 = $tmp627.m;
        $tmp625 = $tmp626.t;
        j = i + $tmp625;
        $tmp629 = this;
        $tmp628 = $tmp629.m;
        $tmp632 = this;
        $tmp631 = $tmp632.m;
        $tmp630 = $tmp631.t;
        x_array[j] += $tmp628.am(0, u0, x, i, 0, $tmp630);
        $tmp634 = x_array[j];
        $tmp633 = $tmp634 >= BI_DV;
        while ($tmp633) {
            x_array[j] -= BI_DV;
            var $tmp638, $tmp639, $tmp633, $tmp640;
            $tmp639 = ++j;
            $tmp638 = x_array[$tmp639]++;
            $tmp640 = x_array[j];
            $tmp633 = $tmp640 >= BI_DV;
        }
        $tmp589 = ++i;
        $tmp637 = this;
        $tmp636 = $tmp637.m;
        $tmp635 = $tmp636.t;
        $tmp590 = i < $tmp635;
    }
    $tmp594 = x.clamp();
    $tmp598 = this;
    $tmp597 = $tmp598.m;
    $tmp596 = $tmp597.t;
    $tmp595 = x.drShiftTo($tmp596, x);
    $tmp602 = this;
    $tmp601 = $tmp602.m;
    $tmp600 = x.compareTo($tmp601);
    $tmp599 = $tmp600 >= 0;
    if ($tmp599) {
        var $tmp1635, $tmp1636, $tmp1637;
        $tmp1637 = this;
        $tmp1636 = $tmp1637.m;
        $tmp1635 = x.subTo($tmp1636, x);
    } else {
    }
}
function montSqrTo(x, r) {
    var $tmp641, $tmp642, $tmp643;
    $tmp641 = x.squareTo(r);
    $tmp643 = this;
    $tmp642 = $tmp643.reduce(r);
}
function montMulTo(x, y, r) {
    var $tmp644, $tmp645, $tmp646;
    $tmp644 = x.multiplyTo(y, r);
    $tmp646 = this;
    $tmp645 = $tmp646.reduce(r);
}
$tmp18 = Montgomery.prototype;
$tmp18.convert = montConvert;
$tmp19 = Montgomery.prototype;
$tmp19.revert = montRevert;
$tmp20 = Montgomery.prototype;
$tmp20.reduce = montReduce;
$tmp21 = Montgomery.prototype;
$tmp21.mulTo = montMulTo;
$tmp22 = Montgomery.prototype;
$tmp22.sqrTo = montSqrTo;
function bnpIsEven() {
    var this_array, $tmp647, $tmp648, $tmp649, $tmp1638, $tmp1639, $tmp1640;
    $tmp647 = this;
    this_array = $tmp647.array;
    $tmp1640 = this;
    $tmp1639 = $tmp1640.t;
    $tmp1638 = $tmp1639 > 0;
    if ($tmp1638) {
        var $tmp1641;
        $tmp1641 = this_array[0];
        $tmp649 = $tmp1641 & 1;
    } else {
        var $tmp1642;
        $tmp1642 = this;
        $tmp649 = $tmp1642.s;
    }
    $tmp648 = $tmp649 == 0;
    return $tmp648;
}
function bnpExp(e, z) {
    var $tmp650, r, $tmp651, $tmp652, $tmp653, $tmp654, $tmp655, $tmp656;
    $tmp650 = e > 4294967295 || e < 1;
    if ($tmp650) {
        var $tmp1643;
        $tmp1643 = BigInteger.ONE;
        return $tmp1643;
    } else {
    }
    r = nbi();
    r2 = nbi();
    $tmp651 = this;
    g = z.convert($tmp651);
    $tmp652 = nbits(e);
    i = $tmp652 - 1;
    $tmp653 = g.copyTo(r);
    $tmp655 = --i;
    $tmp654 = $tmp655 >= 0;
    while ($tmp654) {
        var $tmp657, $tmp658, $tmp659, $tmp660, $tmp654, $tmp661;
        $tmp657 = z.sqrTo(r, r2);
        $tmp660 = 1 << i;
        $tmp659 = e & $tmp660;
        $tmp658 = $tmp659 > 0;
        if ($tmp658) {
            var $tmp1644;
            $tmp1644 = z.mulTo(r2, g, r);
        } else {
            var t;
            t = r;
            r = r2;
            r2 = t;
        }
        $tmp661 = --i;
        $tmp654 = $tmp661 >= 0;
    }
    $tmp656 = z.revert(r);
    return $tmp656;
}
function bnModPowInt(e, m) {
    var z, $tmp662, $tmp663, $tmp664;
    $tmp662 = e < 256 || m.isEven();
    if ($tmp662) {
        z = new Classic(m);
    } else {
        z = new Montgomery(m);
    }
    $tmp664 = this;
    $tmp663 = $tmp664.exp(e, z);
    return $tmp663;
}
$tmp23 = BigInteger.prototype;
$tmp23.copyTo = bnpCopyTo;
$tmp24 = BigInteger.prototype;
$tmp24.fromInt = bnpFromInt;
$tmp25 = BigInteger.prototype;
$tmp25.fromString = bnpFromString;
$tmp26 = BigInteger.prototype;
$tmp26.clamp = bnpClamp;
$tmp27 = BigInteger.prototype;
$tmp27.dlShiftTo = bnpDLShiftTo;
$tmp28 = BigInteger.prototype;
$tmp28.drShiftTo = bnpDRShiftTo;
$tmp29 = BigInteger.prototype;
$tmp29.lShiftTo = bnpLShiftTo;
$tmp30 = BigInteger.prototype;
$tmp30.rShiftTo = bnpRShiftTo;
$tmp31 = BigInteger.prototype;
$tmp31.subTo = bnpSubTo;
$tmp32 = BigInteger.prototype;
$tmp32.multiplyTo = bnpMultiplyTo;
$tmp33 = BigInteger.prototype;
$tmp33.squareTo = bnpSquareTo;
$tmp34 = BigInteger.prototype;
$tmp34.divRemTo = bnpDivRemTo;
$tmp35 = BigInteger.prototype;
$tmp35.invDigit = bnpInvDigit;
$tmp36 = BigInteger.prototype;
$tmp36.isEven = bnpIsEven;
$tmp37 = BigInteger.prototype;
$tmp37.exp = bnpExp;
$tmp38 = BigInteger.prototype;
$tmp38.toString = bnToString;
$tmp39 = BigInteger.prototype;
$tmp39.negate = bnNegate;
$tmp40 = BigInteger.prototype;
$tmp40.abs = bnAbs;
$tmp41 = BigInteger.prototype;
$tmp41.compareTo = bnCompareTo;
$tmp42 = BigInteger.prototype;
$tmp42.bitLength = bnBitLength;
$tmp43 = BigInteger.prototype;
$tmp43.mod = bnMod;
$tmp44 = BigInteger.prototype;
$tmp44.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
function bnClone() {
    var r, $tmp665, $tmp666;
    r = nbi();
    $tmp666 = this;
    $tmp665 = $tmp666.copyTo(r);
    return r;
}
function bnIntValue() {
    var this_array, $tmp667, $tmp668, $tmp669, $tmp670, $tmp671, $tmp672, $tmp673, $tmp674, $tmp675, $tmp676, $tmp677, $tmp678;
    $tmp667 = this;
    this_array = $tmp667.array;
    $tmp670 = this;
    $tmp669 = $tmp670.s;
    $tmp668 = $tmp669 < 0;
    if ($tmp668) {
        var $tmp679, $tmp680, $tmp681;
        $tmp681 = this;
        $tmp680 = $tmp681.t;
        $tmp679 = $tmp680 == 1;
        if ($tmp679) {
            var $tmp1645, $tmp1646;
            $tmp1646 = this_array[0];
            $tmp1645 = $tmp1646 - BI_DV;
            return $tmp1645;
        } else {
            var $tmp1647, $tmp1648, $tmp1649;
            $tmp1649 = this;
            $tmp1648 = $tmp1649.t;
            $tmp1647 = $tmp1648 == 0;
            if ($tmp1647) {
                var $tmp1650;
                $tmp1650 = -1;
                return $tmp1650;
            } else {
            }
        }
    } else {
        var $tmp1651, $tmp1652, $tmp1653;
        $tmp1653 = this;
        $tmp1652 = $tmp1653.t;
        $tmp1651 = $tmp1652 == 1;
        if ($tmp1651) {
            var $tmp1654;
            $tmp1654 = this_array[0];
            return $tmp1654;
        } else {
            var $tmp1655, $tmp1656, $tmp1657;
            $tmp1657 = this;
            $tmp1656 = $tmp1657.t;
            $tmp1655 = $tmp1656 == 0;
            if ($tmp1655) {
                return 0;
            } else {
            }
        }
    }
    $tmp674 = this_array[1];
    $tmp677 = 32 - BI_DB;
    $tmp676 = 1 << $tmp677;
    $tmp675 = $tmp676 - 1;
    $tmp673 = $tmp674 & $tmp675;
    $tmp672 = $tmp673 << BI_DB;
    $tmp678 = this_array[0];
    $tmp671 = $tmp672 | $tmp678;
    return $tmp671;
}
function bnByteValue() {
    var this_array, $tmp682, $tmp683, $tmp1658, $tmp1659, $tmp1660;
    $tmp682 = this;
    this_array = $tmp682.array;
    $tmp1660 = this;
    $tmp1659 = $tmp1660.t;
    $tmp1658 = $tmp1659 == 0;
    if ($tmp1658) {
        var $tmp1661;
        $tmp1661 = this;
        $tmp683 = $tmp1661.s;
    } else {
        var $tmp1662, $tmp1663;
        $tmp1663 = this_array[0];
        $tmp1662 = $tmp1663 << 24;
        $tmp683 = $tmp1662 >> 24;
    }
    return $tmp683;
}
function bnShortValue() {
    var this_array, $tmp684, $tmp685, $tmp1664, $tmp1665, $tmp1666;
    $tmp684 = this;
    this_array = $tmp684.array;
    $tmp1666 = this;
    $tmp1665 = $tmp1666.t;
    $tmp1664 = $tmp1665 == 0;
    if ($tmp1664) {
        var $tmp1667;
        $tmp1667 = this;
        $tmp685 = $tmp1667.s;
    } else {
        var $tmp1668, $tmp1669;
        $tmp1669 = this_array[0];
        $tmp1668 = $tmp1669 << 16;
        $tmp685 = $tmp1668 >> 16;
    }
    return $tmp685;
}
function bnpChunkSize(r) {
    var $tmp686, $tmp687, $tmp688, $tmp689, $tmp690;
    $tmp689 = Math.LN2;
    $tmp688 = $tmp689 * BI_DB;
    $tmp690 = Math.log(r);
    $tmp687 = $tmp688 / $tmp690;
    $tmp686 = Math.floor($tmp687);
    return $tmp686;
}
function bnSigNum() {
    var this_array, $tmp691, $tmp692, $tmp693, $tmp694;
    $tmp691 = this;
    this_array = $tmp691.array;
    $tmp694 = this;
    $tmp693 = $tmp694.s;
    $tmp692 = $tmp693 < 0;
    if ($tmp692) {
        var $tmp1670;
        $tmp1670 = -1;
        return $tmp1670;
    } else {
        var $tmp1671;
        $tmp1671 = this.t <= 0 || this.t == 1 && this_array[0] <= 0;
        if ($tmp1671) {
            return 0;
        } else {
            return 1;
        }
    }
}
function bnpToRadix(b) {
    var $tmp695, $tmp696, cs, $tmp697, a, d, $tmp698, $tmp699, $tmp700, $tmp701, $tmp702, $tmp703, $tmp704;
    $tmp695 = b == null;
    if ($tmp695) {
        b = 10;
    } else {
    }
    $tmp696 = this.signum() == 0 || b < 2 || b > 36;
    if ($tmp696) {
        return '0';
    } else {
    }
    $tmp697 = this;
    cs = $tmp697.chunkSize(b);
    a = Math.pow(b, cs);
    d = nbv(a);
    y = nbi();
    z = nbi();
    r = '';
    $tmp699 = this;
    $tmp698 = $tmp699.divRemTo(d, y, z);
    $tmp701 = y.signum();
    $tmp700 = $tmp701 > 0;
    while ($tmp700) {
        var $tmp705, $tmp706, $tmp707, $tmp708, $tmp709, $tmp700, $tmp710;
        $tmp708 = z.intValue();
        $tmp707 = a + $tmp708;
        $tmp706 = $tmp707.toString(b);
        $tmp705 = $tmp706.substr(1);
        r = $tmp705 + r;
        $tmp709 = y.divRemTo(d, y, z);
        $tmp710 = y.signum();
        $tmp700 = $tmp710 > 0;
    }
    $tmp704 = z.intValue();
    $tmp703 = $tmp704.toString(b);
    $tmp702 = $tmp703 + r;
    return $tmp702;
}
function bnpFromRadix(s, b) {
    var $tmp711, $tmp712, $tmp713, cs, $tmp714, d, i, $tmp716, $tmp717, $tmp718;
    $tmp712 = this;
    $tmp711 = $tmp712.fromInt(0);
    $tmp713 = b == null;
    if ($tmp713) {
        b = 10;
    } else {
    }
    $tmp714 = this;
    cs = $tmp714.chunkSize(b);
    d = Math.pow(b, cs);
    mi = false;
    j = 0;
    w = 0;
    i = 0;
    $tmp717 = s.length;
    $tmp716 = i < $tmp717;
    for (; $tmp716;) {
        var x, $tmp719, $tmp720, $tmp721, $tmp722, $tmp715, $tmp716, $tmp723;
        x = intAt(s, i);
        $tmp719 = x < 0;
        if ($tmp719) {
            var $tmp724;
            $tmp724 = s.charAt(i) == '-' && this.signum() == 0;
            if ($tmp724) {
                mi = true;
            } else {
            }
            continue;
        } else {
        }
        $tmp720 = b * w;
        w = $tmp720 + x;
        $tmp722 = ++j;
        $tmp721 = $tmp722 >= cs;
        if ($tmp721) {
            var $tmp725, $tmp726, $tmp727, $tmp728;
            $tmp726 = this;
            $tmp725 = $tmp726.dMultiply(d);
            $tmp728 = this;
            $tmp727 = $tmp728.dAddOffset(w, 0);
            j = 0;
            w = 0;
        } else {
        }
        $tmp715 = ++i;
        $tmp723 = s.length;
        $tmp716 = i < $tmp723;
    }
    $tmp718 = j > 0;
    if ($tmp718) {
        var $tmp729, $tmp730, $tmp731, $tmp732, $tmp733;
        $tmp730 = this;
        $tmp731 = Math.pow(b, j);
        $tmp729 = $tmp730.dMultiply($tmp731);
        $tmp733 = this;
        $tmp732 = $tmp733.dAddOffset(w, 0);
    } else {
    }
    if (mi) {
        var $tmp1672, $tmp1673, $tmp1674, $tmp1675;
        $tmp1673 = BigInteger.ZERO;
        $tmp1674 = this;
        $tmp1675 = this;
        $tmp1672 = $tmp1673.subTo($tmp1674, $tmp1675);
    } else {
    }
}
function bnpFromNumber(a, b, c) {
    var $tmp734, $tmp735;
    $tmp735 = typeof b;
    $tmp734 = 'number' == $tmp735;
    if ($tmp734) {
        var $tmp736;
        $tmp736 = a < 2;
        if ($tmp736) {
            var $tmp1676, $tmp1677;
            $tmp1677 = this;
            $tmp1676 = $tmp1677.fromInt(1);
        } else {
            var $tmp737, $tmp738, $tmp739, $tmp740, $tmp741, $tmp742, $tmp743, $tmp744, $tmp745, $tmp746, $tmp747;
            $tmp738 = this;
            $tmp737 = $tmp738.fromNumber(a, c);
            $tmp741 = this;
            $tmp742 = a - 1;
            $tmp740 = $tmp741.testBit($tmp742);
            $tmp739 = !$tmp740;
            if ($tmp739) {
                var $tmp1678, $tmp1679, $tmp1680, $tmp1681, $tmp1682, $tmp1683;
                $tmp1679 = this;
                $tmp1681 = BigInteger.ONE;
                $tmp1682 = a - 1;
                $tmp1680 = $tmp1681.shiftLeft($tmp1682);
                $tmp1683 = this;
                $tmp1678 = $tmp1679.bitwiseTo($tmp1680, op_or, $tmp1683);
            } else {
            }
            $tmp744 = this;
            $tmp743 = $tmp744.isEven();
            if ($tmp743) {
                var $tmp1684, $tmp1685;
                $tmp1685 = this;
                $tmp1684 = $tmp1685.dAddOffset(1, 0);
            } else {
            }
            $tmp747 = this;
            $tmp746 = $tmp747.isProbablePrime(b);
            $tmp745 = !$tmp746;
            while ($tmp745) {
                var $tmp748, $tmp749, $tmp750, $tmp751, $tmp752, $tmp745, $tmp753, $tmp754;
                $tmp749 = this;
                $tmp748 = $tmp749.dAddOffset(2, 0);
                $tmp752 = this;
                $tmp751 = $tmp752.bitLength();
                $tmp750 = $tmp751 > a;
                if ($tmp750) {
                    var $tmp1686, $tmp1687, $tmp1688, $tmp1689, $tmp1690, $tmp1691;
                    $tmp1687 = this;
                    $tmp1689 = BigInteger.ONE;
                    $tmp1690 = a - 1;
                    $tmp1688 = $tmp1689.shiftLeft($tmp1690);
                    $tmp1691 = this;
                    $tmp1686 = $tmp1687.subTo($tmp1688, $tmp1691);
                } else {
                }
                $tmp754 = this;
                $tmp753 = $tmp754.isProbablePrime(b);
                $tmp745 = !$tmp753;
            }
        }
    } else {
        var x, t, $tmp755, $tmp756, $tmp757, $tmp758, $tmp759;
        x = new Array();
        t = a & 7;
        $tmp755 = a >> 3;
        x.length = $tmp755 + 1;
        $tmp756 = b.nextBytes(x);
        $tmp757 = t > 0;
        if ($tmp757) {
            var $tmp1692;
            $tmp1692 = 1 << t;
            x[0] &= $tmp1692 - 1;
        } else {
            x[0] = 0;
        }
        $tmp759 = this;
        $tmp758 = $tmp759.fromString(x, 256);
    }
}
function bnToByteArray() {
    var this_array, $tmp760, i, $tmp761, $tmp762, p, $tmp763, $tmp764, $tmp765, $tmp766;
    $tmp760 = this;
    this_array = $tmp760.array;
    $tmp761 = this;
    i = $tmp761.t;
    r = new Array();
    $tmp762 = this;
    r[0] = $tmp762.s;
    $tmp764 = i * BI_DB;
    $tmp763 = $tmp764 % 8;
    p = BI_DB - $tmp763;
    k = 0;
    $tmp766 = i--;
    $tmp765 = $tmp766 > 0;
    if ($tmp765) {
        var $tmp767, $tmp768;
        $tmp767 = p < BI_DB && (d = this_array[i] >> p) != (this.s & BI_DM) >> p;
        if ($tmp767) {
            var $tmp1693, $tmp1694, $tmp1695, $tmp1696, $tmp1697;
            $tmp1693 = k++;
            $tmp1696 = this;
            $tmp1695 = $tmp1696.s;
            $tmp1697 = BI_DB - p;
            $tmp1694 = $tmp1695 << $tmp1697;
            r[$tmp1693] = d | $tmp1694;
        } else {
        }
        $tmp768 = i >= 0;
        while ($tmp768) {
            var $tmp769, $tmp770, $tmp771, $tmp772, $tmp773, $tmp768;
            $tmp769 = p < 8;
            if ($tmp769) {
                var $tmp774, $tmp775, $tmp776, $tmp777, $tmp778, $tmp779, $tmp780, $tmp781;
                $tmp775 = this_array[i];
                $tmp777 = 1 << p;
                $tmp776 = $tmp777 - 1;
                $tmp774 = $tmp775 & $tmp776;
                $tmp778 = 8 - p;
                d = $tmp774 << $tmp778;
                $tmp780 = --i;
                $tmp779 = this_array[$tmp780];
                $tmp781 = p += BI_DB - 8;
                d |= $tmp779 >> $tmp781;
            } else {
                var $tmp782, $tmp783, $tmp784, $tmp785;
                $tmp783 = this_array[i];
                $tmp784 = p -= 8;
                $tmp782 = $tmp783 >> $tmp784;
                d = $tmp782 & 255;
                $tmp785 = p <= 0;
                if ($tmp785) {
                    p += BI_DB;
                    var $tmp786;
                    $tmp786 = --i;
                } else {
                }
            }
            $tmp771 = d & 128;
            $tmp770 = $tmp771 != 0;
            if ($tmp770) {
                d |= -256;
            } else {
            }
            $tmp772 = k == 0 && (this.s & 128) != (d & 128);
            if ($tmp772) {
                var $tmp1698;
                $tmp1698 = ++k;
            } else {
            }
            $tmp773 = k > 0 || d != this.s;
            if ($tmp773) {
                var $tmp1699;
                $tmp1699 = k++;
                r[$tmp1699] = d;
            } else {
            }
            $tmp768 = i >= 0;
        }
    } else {
    }
    return r;
}
function bnEquals(a) {
    var $tmp787, $tmp788, $tmp789;
    $tmp789 = this;
    $tmp788 = $tmp789.compareTo(a);
    $tmp787 = $tmp788 == 0;
    return $tmp787;
}
function bnMin(a) {
    var $tmp790, $tmp1700, $tmp1701, $tmp1702;
    $tmp1702 = this;
    $tmp1701 = $tmp1702.compareTo(a);
    $tmp1700 = $tmp1701 < 0;
    if ($tmp1700) {
        $tmp790 = this;
    } else {
        $tmp790 = a;
    }
    return $tmp790;
}
function bnMax(a) {
    var $tmp791, $tmp1703, $tmp1704, $tmp1705;
    $tmp1705 = this;
    $tmp1704 = $tmp1705.compareTo(a);
    $tmp1703 = $tmp1704 > 0;
    if ($tmp1703) {
        $tmp791 = this;
    } else {
        $tmp791 = a;
    }
    return $tmp791;
}
function bnpBitwiseTo(a, op, r) {
    var this_array, $tmp792, a_array, r_array, i, $tmp793, $tmp794, $tmp795, $tmp796, $tmp798, $tmp799, $tmp800, $tmp801, $tmp802, $tmp803, $tmp804, $tmp805, $tmp806;
    $tmp792 = this;
    this_array = $tmp792.array;
    a_array = a.array;
    r_array = r.array;
    $tmp793 = a.t;
    $tmp795 = this;
    $tmp794 = $tmp795.t;
    m = Math.min($tmp793, $tmp794);
    $tmp796 = i = 0;
    $tmp798 = i < m;
    for (; $tmp798;) {
        var $tmp807, $tmp808, $tmp797, $tmp798;
        $tmp807 = this_array[i];
        $tmp808 = a_array[i];
        r_array[i] = op($tmp807, $tmp808);
        $tmp797 = ++i;
        $tmp798 = i < m;
    }
    $tmp800 = a.t;
    $tmp802 = this;
    $tmp801 = $tmp802.t;
    $tmp799 = $tmp800 < $tmp801;
    if ($tmp799) {
        var $tmp809, $tmp810, $tmp812, $tmp813, $tmp814, $tmp815;
        $tmp809 = a.s;
        f = $tmp809 & BI_DM;
        $tmp810 = i = m;
        $tmp814 = this;
        $tmp813 = $tmp814.t;
        $tmp812 = i < $tmp813;
        for (; $tmp812;) {
            var $tmp816, $tmp811, $tmp812, $tmp817, $tmp818;
            $tmp816 = this_array[i];
            r_array[i] = op($tmp816, f);
            $tmp811 = ++i;
            $tmp818 = this;
            $tmp817 = $tmp818.t;
            $tmp812 = i < $tmp817;
        }
        $tmp815 = this;
        r.t = $tmp815.t;
    } else {
        var $tmp819, $tmp820, $tmp821, $tmp823, $tmp824;
        $tmp820 = this;
        $tmp819 = $tmp820.s;
        f = $tmp819 & BI_DM;
        $tmp821 = i = m;
        $tmp824 = a.t;
        $tmp823 = i < $tmp824;
        for (; $tmp823;) {
            var $tmp825, $tmp822, $tmp823, $tmp826;
            $tmp825 = a_array[i];
            r_array[i] = op(f, $tmp825);
            $tmp822 = ++i;
            $tmp826 = a.t;
            $tmp823 = i < $tmp826;
        }
        r.t = a.t;
    }
    $tmp804 = this;
    $tmp803 = $tmp804.s;
    $tmp805 = a.s;
    r.s = op($tmp803, $tmp805);
    $tmp806 = r.clamp();
}
function op_and(x, y) {
    var $tmp827;
    $tmp827 = x & y;
    return $tmp827;
}
function bnAnd(a) {
    var r, $tmp828, $tmp829;
    r = nbi();
    $tmp829 = this;
    $tmp828 = $tmp829.bitwiseTo(a, op_and, r);
    return r;
}
function op_or(x, y) {
    var $tmp830;
    $tmp830 = x | y;
    return $tmp830;
}
function bnOr(a) {
    var r, $tmp831, $tmp832;
    r = nbi();
    $tmp832 = this;
    $tmp831 = $tmp832.bitwiseTo(a, op_or, r);
    return r;
}
function op_xor(x, y) {
    var $tmp833;
    $tmp833 = x ^ y;
    return $tmp833;
}
function bnXor(a) {
    var r, $tmp834, $tmp835;
    r = nbi();
    $tmp835 = this;
    $tmp834 = $tmp835.bitwiseTo(a, op_xor, r);
    return r;
}
function op_andnot(x, y) {
    var $tmp836, $tmp837;
    $tmp837 = ~y;
    $tmp836 = x & $tmp837;
    return $tmp836;
}
function bnAndNot(a) {
    var r, $tmp838, $tmp839;
    r = nbi();
    $tmp839 = this;
    $tmp838 = $tmp839.bitwiseTo(a, op_andnot, r);
    return r;
}
function bnNot() {
    var this_array, $tmp840, r, r_array, i, $tmp842, $tmp843, $tmp844, $tmp845, $tmp846, $tmp847;
    $tmp840 = this;
    this_array = $tmp840.array;
    r = nbi();
    r_array = r.array;
    i = 0;
    $tmp844 = this;
    $tmp843 = $tmp844.t;
    $tmp842 = i < $tmp843;
    for (; $tmp842;) {
        var $tmp848, $tmp849, $tmp841, $tmp842, $tmp850, $tmp851;
        $tmp849 = this_array[i];
        $tmp848 = ~$tmp849;
        r_array[i] = BI_DM & $tmp848;
        $tmp841 = ++i;
        $tmp851 = this;
        $tmp850 = $tmp851.t;
        $tmp842 = i < $tmp850;
    }
    $tmp845 = this;
    r.t = $tmp845.t;
    $tmp847 = this;
    $tmp846 = $tmp847.s;
    r.s = ~$tmp846;
    return r;
}
function bnShiftLeft(n) {
    var r, $tmp852;
    r = nbi();
    $tmp852 = n < 0;
    if ($tmp852) {
        var $tmp1706, $tmp1707, $tmp1708;
        $tmp1707 = this;
        $tmp1708 = -n;
        $tmp1706 = $tmp1707.rShiftTo($tmp1708, r);
    } else {
        var $tmp1709, $tmp1710;
        $tmp1710 = this;
        $tmp1709 = $tmp1710.lShiftTo(n, r);
    }
    return r;
}
function bnShiftRight(n) {
    var r, $tmp853;
    r = nbi();
    $tmp853 = n < 0;
    if ($tmp853) {
        var $tmp1711, $tmp1712, $tmp1713;
        $tmp1712 = this;
        $tmp1713 = -n;
        $tmp1711 = $tmp1712.lShiftTo($tmp1713, r);
    } else {
        var $tmp1714, $tmp1715;
        $tmp1715 = this;
        $tmp1714 = $tmp1715.rShiftTo(n, r);
    }
    return r;
}
function lbit(x) {
    var $tmp854, r, $tmp855, $tmp856, $tmp857, $tmp858, $tmp859, $tmp860, $tmp861, $tmp862, $tmp863, $tmp864;
    $tmp854 = x == 0;
    if ($tmp854) {
        var $tmp1716;
        $tmp1716 = -1;
        return $tmp1716;
    } else {
    }
    r = 0;
    $tmp856 = x & 65535;
    $tmp855 = $tmp856 == 0;
    if ($tmp855) {
        x >>= 16;
        r += 16;
    } else {
    }
    $tmp858 = x & 255;
    $tmp857 = $tmp858 == 0;
    if ($tmp857) {
        x >>= 8;
        r += 8;
    } else {
    }
    $tmp860 = x & 15;
    $tmp859 = $tmp860 == 0;
    if ($tmp859) {
        x >>= 4;
        r += 4;
    } else {
    }
    $tmp862 = x & 3;
    $tmp861 = $tmp862 == 0;
    if ($tmp861) {
        x >>= 2;
        r += 2;
    } else {
    }
    $tmp864 = x & 1;
    $tmp863 = $tmp864 == 0;
    if ($tmp863) {
        var $tmp1717;
        $tmp1717 = ++r;
    } else {
    }
    return r;
}
function bnGetLowestSetBit() {
    var this_array, $tmp865, i, $tmp867, $tmp868, $tmp869, $tmp870, $tmp871, $tmp872, $tmp873;
    $tmp865 = this;
    this_array = $tmp865.array;
    i = 0;
    $tmp869 = this;
    $tmp868 = $tmp869.t;
    $tmp867 = i < $tmp868;
    for (; $tmp867;) {
        var $tmp874, $tmp875, $tmp866, $tmp867, $tmp876, $tmp877;
        $tmp875 = this_array[i];
        $tmp874 = $tmp875 != 0;
        if ($tmp874) {
            var $tmp1718, $tmp1719, $tmp1720, $tmp1721;
            $tmp1719 = i * BI_DB;
            $tmp1721 = this_array[i];
            $tmp1720 = lbit($tmp1721);
            $tmp1718 = $tmp1719 + $tmp1720;
            return $tmp1718;
        } else {
        }
        $tmp866 = ++i;
        $tmp877 = this;
        $tmp876 = $tmp877.t;
        $tmp867 = i < $tmp876;
    }
    $tmp872 = this;
    $tmp871 = $tmp872.s;
    $tmp870 = $tmp871 < 0;
    if ($tmp870) {
        var $tmp1722, $tmp1723, $tmp1724;
        $tmp1724 = this;
        $tmp1723 = $tmp1724.t;
        $tmp1722 = $tmp1723 * BI_DB;
        return $tmp1722;
    } else {
    }
    $tmp873 = -1;
    return $tmp873;
}
function cbit(x) {
    var r, $tmp878;
    r = 0;
    $tmp878 = x != 0;
    while ($tmp878) {
        x &= x - 1;
        var $tmp879, $tmp878;
        $tmp879 = ++r;
        $tmp878 = x != 0;
    }
    return r;
}
function bnBitCount() {
    var r, x, $tmp880, $tmp881, i, $tmp883, $tmp884, $tmp885;
    r = 0;
    $tmp881 = this;
    $tmp880 = $tmp881.s;
    x = $tmp880 & BI_DM;
    i = 0;
    $tmp885 = this;
    $tmp884 = $tmp885.t;
    $tmp883 = i < $tmp884;
    for (; $tmp883;) {
        var $tmp886, $tmp887, $tmp882, $tmp883, $tmp888, $tmp889;
        $tmp887 = this_array[i];
        $tmp886 = $tmp887 ^ x;
        r += cbit($tmp886);
        $tmp882 = ++i;
        $tmp889 = this;
        $tmp888 = $tmp889.t;
        $tmp883 = i < $tmp888;
    }
    return r;
}
function bnTestBit(n) {
    var this_array, $tmp890, j, $tmp891, $tmp892, $tmp893, $tmp894, $tmp895, $tmp896, $tmp897, $tmp898, $tmp899;
    $tmp890 = this;
    this_array = $tmp890.array;
    $tmp891 = n / BI_DB;
    j = Math.floor($tmp891);
    $tmp894 = this;
    $tmp893 = $tmp894.t;
    $tmp892 = j >= $tmp893;
    if ($tmp892) {
        var $tmp1725, $tmp1726, $tmp1727;
        $tmp1727 = this;
        $tmp1726 = $tmp1727.s;
        $tmp1725 = $tmp1726 != 0;
        return $tmp1725;
    } else {
    }
    $tmp897 = this_array[j];
    $tmp899 = n % BI_DB;
    $tmp898 = 1 << $tmp899;
    $tmp896 = $tmp897 & $tmp898;
    $tmp895 = $tmp896 != 0;
    return $tmp895;
}
function bnpChangeBit(n, op) {
    var r, $tmp900, $tmp901, $tmp902;
    $tmp900 = BigInteger.ONE;
    r = $tmp900.shiftLeft(n);
    $tmp902 = this;
    $tmp901 = $tmp902.bitwiseTo(r, op, r);
    return r;
}
function bnSetBit(n) {
    var $tmp903, $tmp904;
    $tmp904 = this;
    $tmp903 = $tmp904.changeBit(n, op_or);
    return $tmp903;
}
function bnClearBit(n) {
    var $tmp905, $tmp906;
    $tmp906 = this;
    $tmp905 = $tmp906.changeBit(n, op_andnot);
    return $tmp905;
}
function bnFlipBit(n) {
    var $tmp907, $tmp908;
    $tmp908 = this;
    $tmp907 = $tmp908.changeBit(n, op_xor);
    return $tmp907;
}
function bnpAddTo(a, r) {
    var this_array, $tmp909, a_array, r_array, i, $tmp910, $tmp911, $tmp912, $tmp913, $tmp914, $tmp915, $tmp916, $tmp917, $tmp1728, $tmp918, $tmp919;
    $tmp909 = this;
    this_array = $tmp909.array;
    a_array = a.array;
    r_array = r.array;
    i = 0;
    c = 0;
    $tmp910 = a.t;
    $tmp912 = this;
    $tmp911 = $tmp912.t;
    m = Math.min($tmp910, $tmp911);
    $tmp913 = i < m;
    while ($tmp913) {
        var $tmp920, $tmp921, $tmp922, $tmp913;
        $tmp920 = this_array[i];
        $tmp921 = a_array[i];
        c += $tmp920 + $tmp921;
        $tmp922 = i++;
        r_array[$tmp922] = c & BI_DM;
        c >>= BI_DB;
        $tmp913 = i < m;
    }
    $tmp915 = a.t;
    $tmp917 = this;
    $tmp916 = $tmp917.t;
    $tmp914 = $tmp915 < $tmp916;
    if ($tmp914) {
        c += a.s;
        var $tmp923, $tmp924, $tmp925, $tmp926;
        $tmp925 = this;
        $tmp924 = $tmp925.t;
        $tmp923 = i < $tmp924;
        while ($tmp923) {
            c += this_array[i];
            var $tmp927, $tmp923, $tmp928, $tmp929;
            $tmp927 = i++;
            r_array[$tmp927] = c & BI_DM;
            c >>= BI_DB;
            $tmp929 = this;
            $tmp928 = $tmp929.t;
            $tmp923 = i < $tmp928;
        }
        $tmp926 = this;
        c += $tmp926.s;
    } else {
        var $tmp930, $tmp931, $tmp932;
        $tmp930 = this;
        c += $tmp930.s;
        $tmp932 = a.t;
        $tmp931 = i < $tmp932;
        while ($tmp931) {
            c += a_array[i];
            var $tmp933, $tmp931, $tmp934;
            $tmp933 = i++;
            r_array[$tmp933] = c & BI_DM;
            c >>= BI_DB;
            $tmp934 = a.t;
            $tmp931 = i < $tmp934;
        }
        c += a.s;
    }
    $tmp1728 = c < 0;
    if ($tmp1728) {
        r.s = -1;
    } else {
        r.s = 0;
    }
    $tmp918 = c > 0;
    if ($tmp918) {
        var $tmp1729;
        $tmp1729 = i++;
        r_array[$tmp1729] = c;
    } else {
        var $tmp1730, $tmp1731;
        $tmp1731 = -1;
        $tmp1730 = c < $tmp1731;
        if ($tmp1730) {
            var $tmp1732;
            $tmp1732 = i++;
            r_array[$tmp1732] = BI_DV + c;
        } else {
        }
    }
    r.t = i;
    $tmp919 = r.clamp();
}
function bnAdd(a) {
    var r, $tmp935, $tmp936;
    r = nbi();
    $tmp936 = this;
    $tmp935 = $tmp936.addTo(a, r);
    return r;
}
function bnSubtract(a) {
    var r, $tmp937, $tmp938;
    r = nbi();
    $tmp938 = this;
    $tmp937 = $tmp938.subTo(a, r);
    return r;
}
function bnMultiply(a) {
    var r, $tmp939, $tmp940;
    r = nbi();
    $tmp940 = this;
    $tmp939 = $tmp940.multiplyTo(a, r);
    return r;
}
function bnDivide(a) {
    var r, $tmp941, $tmp942;
    r = nbi();
    $tmp942 = this;
    $tmp941 = $tmp942.divRemTo(a, r, null);
    return r;
}
function bnRemainder(a) {
    var r, $tmp943, $tmp944;
    r = nbi();
    $tmp944 = this;
    $tmp943 = $tmp944.divRemTo(a, null, r);
    return r;
}
function bnDivideAndRemainder(a) {
    var q, r, $tmp945, $tmp946, $tmp947;
    q = nbi();
    r = nbi();
    $tmp946 = this;
    $tmp945 = $tmp946.divRemTo(a, q, r);
    $tmp947 = new Array(q, r);
    return $tmp947;
}
function bnpDMultiply(n) {
    var this_array, $tmp948, $tmp949, $tmp950, $tmp951, $tmp952, $tmp953, $tmp954, $tmp955, $tmp956, $tmp957, $tmp958, $tmp959;
    $tmp948 = this;
    this_array = $tmp948.array;
    $tmp950 = this;
    $tmp949 = $tmp950.t;
    $tmp951 = this;
    $tmp952 = n - 1;
    $tmp953 = this;
    $tmp955 = this;
    $tmp954 = $tmp955.t;
    this_array[$tmp949] = $tmp951.am(0, $tmp952, $tmp953, 0, 0, $tmp954);
    $tmp957 = this;
    $tmp956 = ++$tmp957.t;
    $tmp959 = this;
    $tmp958 = $tmp959.clamp();
}
function bnpDAddOffset(n, w) {
    var this_array, $tmp960, $tmp961, $tmp962, $tmp963, $tmp964, $tmp965;
    $tmp960 = this;
    this_array = $tmp960.array;
    $tmp963 = this;
    $tmp962 = $tmp963.t;
    $tmp961 = $tmp962 <= w;
    while ($tmp961) {
        var $tmp966, $tmp967, $tmp961, $tmp968, $tmp969;
        $tmp967 = this;
        $tmp966 = $tmp967.t++;
        this_array[$tmp966] = 0;
        $tmp969 = this;
        $tmp968 = $tmp969.t;
        $tmp961 = $tmp968 <= w;
    }
    this_array[w] += n;
    $tmp965 = this_array[w];
    $tmp964 = $tmp965 >= BI_DV;
    while ($tmp964) {
        this_array[w] -= BI_DV;
        var $tmp970, $tmp971, $tmp972, $tmp973, $tmp974, $tmp964, $tmp975;
        $tmp971 = ++w;
        $tmp973 = this;
        $tmp972 = $tmp973.t;
        $tmp970 = $tmp971 >= $tmp972;
        if ($tmp970) {
            var $tmp1733, $tmp1734;
            $tmp1734 = this;
            $tmp1733 = $tmp1734.t++;
            this_array[$tmp1733] = 0;
        } else {
        }
        $tmp974 = ++this_array[w];
        $tmp975 = this_array[w];
        $tmp964 = $tmp975 >= BI_DV;
    }
}
function NullExp() {
}
function nNop(x) {
    return x;
}
function nMulTo(x, y, r) {
    var $tmp976;
    $tmp976 = x.multiplyTo(y, r);
}
function nSqrTo(x, r) {
    var $tmp977;
    $tmp977 = x.squareTo(r);
}
$tmp45 = NullExp.prototype;
$tmp45.convert = nNop;
$tmp46 = NullExp.prototype;
$tmp46.revert = nNop;
$tmp47 = NullExp.prototype;
$tmp47.mulTo = nMulTo;
$tmp48 = NullExp.prototype;
$tmp48.sqrTo = nSqrTo;
function bnPow(e) {
    var $tmp978, $tmp979, $tmp980;
    $tmp979 = this;
    $tmp980 = new NullExp();
    $tmp978 = $tmp979.exp(e, $tmp980);
    return $tmp978;
}
function bnpMultiplyLowerTo(a, n, r) {
    var r_array, a_array, i, $tmp981, $tmp982, $tmp983, $tmp984, $tmp985, j, $tmp986, $tmp988, $tmp989, $tmp991, $tmp992;
    r_array = r.array;
    a_array = a.array;
    $tmp983 = this;
    $tmp982 = $tmp983.t;
    $tmp984 = a.t;
    $tmp981 = $tmp982 + $tmp984;
    i = Math.min($tmp981, n);
    r.s = 0;
    r.t = i;
    $tmp985 = i > 0;
    while ($tmp985) {
        var $tmp993, $tmp985;
        $tmp993 = --i;
        r_array[$tmp993] = 0;
        $tmp985 = i > 0;
    }
    $tmp986 = j = r.t - this.t;
    $tmp988 = i < j;
    for (; $tmp988;) {
        var $tmp994, $tmp995, $tmp996, $tmp997, $tmp998, $tmp999, $tmp1000, $tmp987, $tmp988;
        $tmp996 = this;
        $tmp995 = $tmp996.t;
        $tmp994 = i + $tmp995;
        $tmp997 = this;
        $tmp998 = a_array[i];
        $tmp1000 = this;
        $tmp999 = $tmp1000.t;
        r_array[$tmp994] = $tmp997.am(0, $tmp998, r, i, 0, $tmp999);
        $tmp987 = ++i;
        $tmp988 = i < j;
    }
    $tmp989 = j = Math.min(a.t, n);
    $tmp991 = i < j;
    for (; $tmp991;) {
        var $tmp1001, $tmp1002, $tmp1003, $tmp1004, $tmp990, $tmp991;
        $tmp1002 = this;
        $tmp1003 = a_array[i];
        $tmp1004 = n - i;
        $tmp1001 = $tmp1002.am(0, $tmp1003, r, i, 0, $tmp1004);
        $tmp990 = ++i;
        $tmp991 = i < j;
    }
    $tmp992 = r.clamp();
}
function bnpMultiplyUpperTo(a, n, r) {
    var r_array, a_array, $tmp1005, i, $tmp1006, $tmp1007, $tmp1008, $tmp1010, $tmp1011, $tmp1012, $tmp1013;
    r_array = r.array;
    a_array = a.array;
    $tmp1005 = --n;
    i = r.t = this.t + a.t - n;
    r.s = 0;
    $tmp1007 = --i;
    $tmp1006 = $tmp1007 >= 0;
    while ($tmp1006) {
        r_array[i] = 0;
        var $tmp1006, $tmp1014;
        $tmp1014 = --i;
        $tmp1006 = $tmp1014 >= 0;
    }
    $tmp1008 = i = Math.max(n - this.t, 0);
    $tmp1011 = a.t;
    $tmp1010 = i < $tmp1011;
    for (; $tmp1010;) {
        var $tmp1015, $tmp1016, $tmp1017, $tmp1018, $tmp1019, $tmp1020, $tmp1021, $tmp1022, $tmp1023, $tmp1024, $tmp1025, $tmp1009, $tmp1010, $tmp1026;
        $tmp1018 = this;
        $tmp1017 = $tmp1018.t;
        $tmp1016 = $tmp1017 + i;
        $tmp1015 = $tmp1016 - n;
        $tmp1019 = this;
        $tmp1020 = n - i;
        $tmp1021 = a_array[i];
        $tmp1025 = this;
        $tmp1024 = $tmp1025.t;
        $tmp1023 = $tmp1024 + i;
        $tmp1022 = $tmp1023 - n;
        r_array[$tmp1015] = $tmp1019.am($tmp1020, $tmp1021, r, 0, 0, $tmp1022);
        $tmp1009 = ++i;
        $tmp1026 = a.t;
        $tmp1010 = i < $tmp1026;
    }
    $tmp1012 = r.clamp();
    $tmp1013 = r.drShiftTo(1, r);
}
function Barrett(m) {
    var $tmp1027, $tmp1028, $tmp1029, $tmp1030, $tmp1031, $tmp1032, $tmp1033, $tmp1034, $tmp1035, $tmp1036, $tmp1037, $tmp1038;
    $tmp1027 = this;
    $tmp1027.r2 = nbi();
    $tmp1028 = this;
    $tmp1028.q3 = nbi();
    $tmp1030 = BigInteger.ONE;
    $tmp1032 = m.t;
    $tmp1031 = 2 * $tmp1032;
    $tmp1034 = this;
    $tmp1033 = $tmp1034.r2;
    $tmp1029 = $tmp1030.dlShiftTo($tmp1031, $tmp1033);
    $tmp1035 = this;
    $tmp1037 = this;
    $tmp1036 = $tmp1037.r2;
    $tmp1035.mu = $tmp1036.divide(m);
    $tmp1038 = this;
    $tmp1038.m = m;
}
function barrettConvert(x) {
    var $tmp1039;
    $tmp1039 = x.s < 0 || x.t > 2 * this.m.t;
    if ($tmp1039) {
        var $tmp1735, $tmp1736, $tmp1737;
        $tmp1737 = this;
        $tmp1736 = $tmp1737.m;
        $tmp1735 = x.mod($tmp1736);
        return $tmp1735;
    } else {
        var $tmp1738, $tmp1739, $tmp1740, $tmp1741;
        $tmp1741 = this;
        $tmp1740 = $tmp1741.m;
        $tmp1739 = x.compareTo($tmp1740);
        $tmp1738 = $tmp1739 < 0;
        if ($tmp1738) {
            return x;
        } else {
            var r, $tmp1040, $tmp1041, $tmp1042;
            r = nbi();
            $tmp1040 = x.copyTo(r);
            $tmp1042 = this;
            $tmp1041 = $tmp1042.reduce(r);
            return r;
        }
    }
}
function barrettRevert(x) {
    return x;
}
function barrettReduce(x) {
    var $tmp1043, $tmp1044, $tmp1045, $tmp1046, $tmp1047, $tmp1048, $tmp1049, $tmp1050, $tmp1051, $tmp1052, $tmp1053, $tmp1054, $tmp1055, $tmp1056, $tmp1057, $tmp1058, $tmp1059, $tmp1060, $tmp1061, $tmp1062, $tmp1063, $tmp1064, $tmp1065, $tmp1066, $tmp1067, $tmp1068, $tmp1069, $tmp1070, $tmp1071, $tmp1072, $tmp1073, $tmp1074, $tmp1075, $tmp1076, $tmp1077, $tmp1078, $tmp1079, $tmp1080, $tmp1081, $tmp1082, $tmp1083, $tmp1084, $tmp1085, $tmp1086, $tmp1087, $tmp1088;
    $tmp1047 = this;
    $tmp1046 = $tmp1047.m;
    $tmp1045 = $tmp1046.t;
    $tmp1044 = $tmp1045 - 1;
    $tmp1049 = this;
    $tmp1048 = $tmp1049.r2;
    $tmp1043 = x.drShiftTo($tmp1044, $tmp1048);
    $tmp1051 = x.t;
    $tmp1055 = this;
    $tmp1054 = $tmp1055.m;
    $tmp1053 = $tmp1054.t;
    $tmp1052 = $tmp1053 + 1;
    $tmp1050 = $tmp1051 > $tmp1052;
    if ($tmp1050) {
        var $tmp1089, $tmp1090, $tmp1091, $tmp1092;
        $tmp1091 = this;
        $tmp1090 = $tmp1091.m;
        $tmp1089 = $tmp1090.t;
        x.t = $tmp1089 + 1;
        $tmp1092 = x.clamp();
    } else {
    }
    $tmp1058 = this;
    $tmp1057 = $tmp1058.mu;
    $tmp1060 = this;
    $tmp1059 = $tmp1060.r2;
    $tmp1064 = this;
    $tmp1063 = $tmp1064.m;
    $tmp1062 = $tmp1063.t;
    $tmp1061 = $tmp1062 + 1;
    $tmp1066 = this;
    $tmp1065 = $tmp1066.q3;
    $tmp1056 = $tmp1057.multiplyUpperTo($tmp1059, $tmp1061, $tmp1065);
    $tmp1069 = this;
    $tmp1068 = $tmp1069.m;
    $tmp1071 = this;
    $tmp1070 = $tmp1071.q3;
    $tmp1075 = this;
    $tmp1074 = $tmp1075.m;
    $tmp1073 = $tmp1074.t;
    $tmp1072 = $tmp1073 + 1;
    $tmp1077 = this;
    $tmp1076 = $tmp1077.r2;
    $tmp1067 = $tmp1068.multiplyLowerTo($tmp1070, $tmp1072, $tmp1076);
    $tmp1081 = this;
    $tmp1080 = $tmp1081.r2;
    $tmp1079 = x.compareTo($tmp1080);
    $tmp1078 = $tmp1079 < 0;
    while ($tmp1078) {
        var $tmp1093, $tmp1094, $tmp1095, $tmp1096, $tmp1097, $tmp1078, $tmp1098, $tmp1099, $tmp1100;
        $tmp1097 = this;
        $tmp1096 = $tmp1097.m;
        $tmp1095 = $tmp1096.t;
        $tmp1094 = $tmp1095 + 1;
        $tmp1093 = x.dAddOffset(1, $tmp1094);
        $tmp1100 = this;
        $tmp1099 = $tmp1100.r2;
        $tmp1098 = x.compareTo($tmp1099);
        $tmp1078 = $tmp1098 < 0;
    }
    $tmp1084 = this;
    $tmp1083 = $tmp1084.r2;
    $tmp1082 = x.subTo($tmp1083, x);
    $tmp1088 = this;
    $tmp1087 = $tmp1088.m;
    $tmp1086 = x.compareTo($tmp1087);
    $tmp1085 = $tmp1086 >= 0;
    while ($tmp1085) {
        var $tmp1101, $tmp1102, $tmp1103, $tmp1085, $tmp1104, $tmp1105, $tmp1106;
        $tmp1103 = this;
        $tmp1102 = $tmp1103.m;
        $tmp1101 = x.subTo($tmp1102, x);
        $tmp1106 = this;
        $tmp1105 = $tmp1106.m;
        $tmp1104 = x.compareTo($tmp1105);
        $tmp1085 = $tmp1104 >= 0;
    }
}
function barrettSqrTo(x, r) {
    var $tmp1107, $tmp1108, $tmp1109;
    $tmp1107 = x.squareTo(r);
    $tmp1109 = this;
    $tmp1108 = $tmp1109.reduce(r);
}
function barrettMulTo(x, y, r) {
    var $tmp1110, $tmp1111, $tmp1112;
    $tmp1110 = x.multiplyTo(y, r);
    $tmp1112 = this;
    $tmp1111 = $tmp1112.reduce(r);
}
$tmp49 = Barrett.prototype;
$tmp49.convert = barrettConvert;
$tmp50 = Barrett.prototype;
$tmp50.revert = barrettRevert;
$tmp51 = Barrett.prototype;
$tmp51.reduce = barrettReduce;
$tmp52 = Barrett.prototype;
$tmp52.mulTo = barrettMulTo;
$tmp53 = Barrett.prototype;
$tmp53.sqrTo = barrettSqrTo;
function bnModPow(e, m) {
    var e_array, i, $tmp1113, $tmp1114, g, $tmp1115, $tmp1116, $tmp1117, j, $tmp1118, $tmp1119, $tmp1120, $tmp1121, $tmp1122;
    e_array = e.array;
    i = e.bitLength();
    r = nbv(1);
    $tmp1113 = i <= 0;
    if ($tmp1113) {
        return r;
    } else {
        var $tmp1742;
        $tmp1742 = i < 18;
        if ($tmp1742) {
            k = 1;
        } else {
            var $tmp1743;
            $tmp1743 = i < 48;
            if ($tmp1743) {
                k = 3;
            } else {
                var $tmp1744;
                $tmp1744 = i < 144;
                if ($tmp1744) {
                    k = 4;
                } else {
                    var $tmp1745;
                    $tmp1745 = i < 768;
                    if ($tmp1745) {
                        k = 5;
                    } else {
                        k = 6;
                    }
                }
            }
        }
    }
    $tmp1114 = i < 8;
    if ($tmp1114) {
        z = new Classic(m);
    } else {
        var $tmp1746;
        $tmp1746 = m.isEven();
        if ($tmp1746) {
            z = new Barrett(m);
        } else {
            z = new Montgomery(m);
        }
    }
    g = new Array();
    n = 3;
    k1 = k - 1;
    $tmp1115 = 1 << k;
    km = $tmp1115 - 1;
    $tmp1116 = this;
    g[1] = z.convert($tmp1116);
    $tmp1117 = k > 1;
    if ($tmp1117) {
        var g2, $tmp1123, $tmp1124, $tmp1125;
        g2 = nbi();
        $tmp1124 = g[1];
        $tmp1123 = z.sqrTo($tmp1124, g2);
        $tmp1125 = n <= km;
        while ($tmp1125) {
            g[n] = nbi();
            var $tmp1126, $tmp1127, $tmp1128, $tmp1129, $tmp1125;
            $tmp1128 = n - 2;
            $tmp1127 = g[$tmp1128];
            $tmp1129 = g[n];
            $tmp1126 = z.mulTo(g2, $tmp1127, $tmp1129);
            n += 2;
            $tmp1125 = n <= km;
        }
    } else {
    }
    $tmp1118 = e.t;
    j = $tmp1118 - 1;
    is1 = true;
    r2 = nbi();
    $tmp1120 = e_array[j];
    $tmp1119 = nbits($tmp1120);
    i = $tmp1119 - 1;
    $tmp1121 = j >= 0;
    while ($tmp1121) {
        var $tmp1130, $tmp1131, $tmp1132, $tmp1133, $tmp1134, $tmp1135, $tmp1121;
        $tmp1130 = i >= k1;
        if ($tmp1130) {
            var $tmp1747, $tmp1748, $tmp1749;
            $tmp1748 = e_array[j];
            $tmp1749 = i - k1;
            $tmp1747 = $tmp1748 >> $tmp1749;
            w = $tmp1747 & km;
        } else {
            var $tmp1136, $tmp1137, $tmp1138, $tmp1139, $tmp1140, $tmp1141, $tmp1142;
            $tmp1137 = e_array[j];
            $tmp1140 = i + 1;
            $tmp1139 = 1 << $tmp1140;
            $tmp1138 = $tmp1139 - 1;
            $tmp1136 = $tmp1137 & $tmp1138;
            $tmp1141 = k1 - i;
            w = $tmp1136 << $tmp1141;
            $tmp1142 = j > 0;
            if ($tmp1142) {
                var $tmp1750, $tmp1751, $tmp1752, $tmp1753;
                $tmp1751 = j - 1;
                $tmp1750 = e_array[$tmp1751];
                $tmp1753 = BI_DB + i;
                $tmp1752 = $tmp1753 - k1;
                w |= $tmp1750 >> $tmp1752;
            } else {
            }
        }
        n = k;
        $tmp1132 = w & 1;
        $tmp1131 = $tmp1132 == 0;
        while ($tmp1131) {
            w >>= 1;
            var $tmp1143, $tmp1131, $tmp1144;
            $tmp1143 = --n;
            $tmp1144 = w & 1;
            $tmp1131 = $tmp1144 == 0;
        }
        $tmp1134 = i -= n;
        $tmp1133 = $tmp1134 < 0;
        if ($tmp1133) {
            i += BI_DB;
            var $tmp1145;
            $tmp1145 = --j;
        } else {
        }
        if (is1) {
            var $tmp1146, $tmp1147;
            $tmp1147 = g[w];
            $tmp1146 = $tmp1147.copyTo(r);
            is1 = false;
        } else {
            var $tmp1148, $tmp1149, $tmp1150, $tmp1151;
            $tmp1148 = n > 1;
            while ($tmp1148) {
                var $tmp1152, $tmp1153, $tmp1148;
                $tmp1152 = z.sqrTo(r, r2);
                $tmp1153 = z.sqrTo(r2, r);
                n -= 2;
                $tmp1148 = n > 1;
            }
            $tmp1149 = n > 0;
            if ($tmp1149) {
                var $tmp1754;
                $tmp1754 = z.sqrTo(r, r2);
            } else {
                t = r;
                r = r2;
                r2 = t;
            }
            $tmp1151 = g[w];
            $tmp1150 = z.mulTo(r2, $tmp1151, r);
        }
        $tmp1135 = j >= 0 && (e_array[j] & 1 << i) == 0;
        while ($tmp1135) {
            var $tmp1154, $tmp1155, $tmp1156, $tmp1135;
            $tmp1154 = z.sqrTo(r, r2);
            t = r;
            r = r2;
            r2 = t;
            $tmp1156 = --i;
            $tmp1155 = $tmp1156 < 0;
            if ($tmp1155) {
                i = BI_DB - 1;
                var $tmp1157;
                $tmp1157 = --j;
            } else {
            }
            $tmp1135 = j >= 0 && (e_array[j] & 1 << i) == 0;
        }
        $tmp1121 = j >= 0;
    }
    $tmp1122 = z.revert(r);
    return $tmp1122;
}
function bnGCD(a) {
    var x, $tmp1755, $tmp1756, $tmp1757, y, $tmp1758, $tmp1759, $tmp1158, $tmp1159, i, $tmp1160, $tmp1161, $tmp1162, $tmp1163, $tmp1164, $tmp1165;
    $tmp1757 = this;
    $tmp1756 = $tmp1757.s;
    $tmp1755 = $tmp1756 < 0;
    if ($tmp1755) {
        var $tmp1760;
        $tmp1760 = this;
        x = $tmp1760.negate();
    } else {
        var $tmp1761;
        $tmp1761 = this;
        x = $tmp1761.clone();
    }
    $tmp1759 = a.s;
    $tmp1758 = $tmp1759 < 0;
    if ($tmp1758) {
        y = a.negate();
    } else {
        y = a.clone();
    }
    $tmp1159 = x.compareTo(y);
    $tmp1158 = $tmp1159 < 0;
    if ($tmp1158) {
        var t;
        t = x;
        x = y;
        y = t;
    } else {
    }
    i = x.getLowestSetBit();
    g = y.getLowestSetBit();
    $tmp1160 = g < 0;
    if ($tmp1160) {
        return x;
    } else {
    }
    $tmp1161 = i < g;
    if ($tmp1161) {
        g = i;
    } else {
    }
    $tmp1162 = g > 0;
    if ($tmp1162) {
        var $tmp1166, $tmp1167;
        $tmp1166 = x.rShiftTo(g, x);
        $tmp1167 = y.rShiftTo(g, y);
    } else {
    }
    $tmp1164 = x.signum();
    $tmp1163 = $tmp1164 > 0;
    while ($tmp1163) {
        var $tmp1168, $tmp1169, $tmp1170, $tmp1171, $tmp1172, $tmp1173, $tmp1163, $tmp1174;
        $tmp1169 = i = x.getLowestSetBit();
        $tmp1168 = $tmp1169 > 0;
        if ($tmp1168) {
            var $tmp1762;
            $tmp1762 = x.rShiftTo(i, x);
        } else {
        }
        $tmp1171 = i = y.getLowestSetBit();
        $tmp1170 = $tmp1171 > 0;
        if ($tmp1170) {
            var $tmp1763;
            $tmp1763 = y.rShiftTo(i, y);
        } else {
        }
        $tmp1173 = x.compareTo(y);
        $tmp1172 = $tmp1173 >= 0;
        if ($tmp1172) {
            var $tmp1175, $tmp1176;
            $tmp1175 = x.subTo(y, x);
            $tmp1176 = x.rShiftTo(1, x);
        } else {
            var $tmp1177, $tmp1178;
            $tmp1177 = y.subTo(x, y);
            $tmp1178 = y.rShiftTo(1, y);
        }
        $tmp1174 = x.signum();
        $tmp1163 = $tmp1174 > 0;
    }
    $tmp1165 = g > 0;
    if ($tmp1165) {
        var $tmp1764;
        $tmp1764 = y.lShiftTo(g, y);
    } else {
    }
    return y;
}
function bnpModInt(n) {
    var this_array, $tmp1179, $tmp1180, d, $tmp1765, $tmp1766, $tmp1767, $tmp1181, $tmp1182, $tmp1183;
    $tmp1179 = this;
    this_array = $tmp1179.array;
    $tmp1180 = n <= 0;
    if ($tmp1180) {
        return 0;
    } else {
    }
    d = BI_DV % n;
    $tmp1767 = this;
    $tmp1766 = $tmp1767.s;
    $tmp1765 = $tmp1766 < 0;
    if ($tmp1765) {
        r = n - 1;
    } else {
        r = 0;
    }
    $tmp1183 = this;
    $tmp1182 = $tmp1183.t;
    $tmp1181 = $tmp1182 > 0;
    if ($tmp1181) {
        var $tmp1768;
        $tmp1768 = d == 0;
        if ($tmp1768) {
            var $tmp1769;
            $tmp1769 = this_array[0];
            r = $tmp1769 % n;
        } else {
            var i, $tmp1770, $tmp1771, $tmp1773;
            $tmp1771 = this;
            $tmp1770 = $tmp1771.t;
            i = $tmp1770 - 1;
            $tmp1773 = i >= 0;
            for (; $tmp1773;) {
                var $tmp1184, $tmp1185, $tmp1186, $tmp1772, $tmp1773;
                $tmp1185 = d * r;
                $tmp1186 = this_array[i];
                $tmp1184 = $tmp1185 + $tmp1186;
                r = $tmp1184 % n;
                $tmp1772 = --i;
                $tmp1773 = i >= 0;
            }
        }
    } else {
    }
    return r;
}
function bnModInverse(m) {
    var ac, $tmp1187, u, $tmp1188, a, $tmp1189, $tmp1190, $tmp1191, $tmp1192, $tmp1193, $tmp1194, $tmp1195, $tmp1196, $tmp1197, $tmp1198, $tmp1199;
    ac = m.isEven();
    $tmp1187 = this.isEven() && ac || m.signum() == 0;
    if ($tmp1187) {
        var $tmp1774;
        $tmp1774 = BigInteger.ZERO;
        return $tmp1774;
    } else {
    }
    u = m.clone();
    $tmp1188 = this;
    v = $tmp1188.clone();
    a = nbv(1);
    b = nbv(0);
    c = nbv(0);
    d = nbv(1);
    $tmp1190 = u.signum();
    $tmp1189 = $tmp1190 != 0;
    while ($tmp1189) {
        var $tmp1200, $tmp1201, $tmp1202, $tmp1203, $tmp1189, $tmp1204;
        $tmp1200 = u.isEven();
        while ($tmp1200) {
            var $tmp1205, $tmp1206, $tmp1200;
            $tmp1205 = u.rShiftTo(1, u);
            if (ac) {
                var $tmp1207, $tmp1208;
                $tmp1207 = !a.isEven() || !b.isEven();
                if ($tmp1207) {
                    var $tmp1209, $tmp1210, $tmp1211;
                    $tmp1210 = this;
                    $tmp1209 = a.addTo($tmp1210, a);
                    $tmp1211 = b.subTo(m, b);
                } else {
                }
                $tmp1208 = a.rShiftTo(1, a);
            } else {
                var $tmp1775, $tmp1776;
                $tmp1776 = b.isEven();
                $tmp1775 = !$tmp1776;
                if ($tmp1775) {
                    var $tmp1777;
                    $tmp1777 = b.subTo(m, b);
                } else {
                }
            }
            $tmp1206 = b.rShiftTo(1, b);
            $tmp1200 = u.isEven();
        }
        $tmp1201 = v.isEven();
        while ($tmp1201) {
            var $tmp1212, $tmp1213, $tmp1201;
            $tmp1212 = v.rShiftTo(1, v);
            if (ac) {
                var $tmp1214, $tmp1215;
                $tmp1214 = !c.isEven() || !d.isEven();
                if ($tmp1214) {
                    var $tmp1216, $tmp1217, $tmp1218;
                    $tmp1217 = this;
                    $tmp1216 = c.addTo($tmp1217, c);
                    $tmp1218 = d.subTo(m, d);
                } else {
                }
                $tmp1215 = c.rShiftTo(1, c);
            } else {
                var $tmp1778, $tmp1779;
                $tmp1779 = d.isEven();
                $tmp1778 = !$tmp1779;
                if ($tmp1778) {
                    var $tmp1780;
                    $tmp1780 = d.subTo(m, d);
                } else {
                }
            }
            $tmp1213 = d.rShiftTo(1, d);
            $tmp1201 = v.isEven();
        }
        $tmp1203 = u.compareTo(v);
        $tmp1202 = $tmp1203 >= 0;
        if ($tmp1202) {
            var $tmp1219, $tmp1220;
            $tmp1219 = u.subTo(v, u);
            if (ac) {
                var $tmp1781;
                $tmp1781 = a.subTo(c, a);
            } else {
            }
            $tmp1220 = b.subTo(d, b);
        } else {
            var $tmp1221, $tmp1222;
            $tmp1221 = v.subTo(u, v);
            if (ac) {
                var $tmp1782;
                $tmp1782 = c.subTo(a, c);
            } else {
            }
            $tmp1222 = d.subTo(b, d);
        }
        $tmp1204 = u.signum();
        $tmp1189 = $tmp1204 != 0;
    }
    $tmp1193 = BigInteger.ONE;
    $tmp1192 = v.compareTo($tmp1193);
    $tmp1191 = $tmp1192 != 0;
    if ($tmp1191) {
        var $tmp1783;
        $tmp1783 = BigInteger.ZERO;
        return $tmp1783;
    } else {
    }
    $tmp1195 = d.compareTo(m);
    $tmp1194 = $tmp1195 >= 0;
    if ($tmp1194) {
        var $tmp1784;
        $tmp1784 = d.subtract(m);
        return $tmp1784;
    } else {
    }
    $tmp1197 = d.signum();
    $tmp1196 = $tmp1197 < 0;
    if ($tmp1196) {
        var $tmp1785;
        $tmp1785 = d.addTo(m, d);
    } else {
        return d;
    }
    $tmp1199 = d.signum();
    $tmp1198 = $tmp1199 < 0;
    if ($tmp1198) {
        var $tmp1786;
        $tmp1786 = d.add(m);
        return $tmp1786;
    } else {
        return d;
    }
}
lowprimes = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
    107,
    109,
    113,
    127,
    131,
    137,
    139,
    149,
    151,
    157,
    163,
    167,
    173,
    179,
    181,
    191,
    193,
    197,
    199,
    211,
    223,
    227,
    229,
    233,
    239,
    241,
    251,
    257,
    263,
    269,
    271,
    277,
    281,
    283,
    293,
    307,
    311,
    313,
    317,
    331,
    337,
    347,
    349,
    353,
    359,
    367,
    373,
    379,
    383,
    389,
    397,
    401,
    409,
    419,
    421,
    431,
    433,
    439,
    443,
    449,
    457,
    461,
    463,
    467,
    479,
    487,
    491,
    499,
    503,
    509
];
$tmp54 = 1 << 26;
$tmp57 = lowprimes.length;
$tmp56 = $tmp57 - 1;
$tmp55 = lowprimes[$tmp56];
lplim = $tmp54 / $tmp55;
function bnIsProbablePrime(t) {
    var i, x, $tmp1223, x_array, $tmp1224, $tmp1225, $tmp1226, $tmp1227, $tmp1228;
    $tmp1223 = this;
    x = $tmp1223.abs();
    x_array = x.array;
    $tmp1224 = x.t == 1 && x_array[0] <= lowprimes[lowprimes.length - 1];
    if ($tmp1224) {
        var $tmp1229, $tmp1231, $tmp1232;
        $tmp1229 = i = 0;
        $tmp1232 = lowprimes.length;
        $tmp1231 = i < $tmp1232;
        for (; $tmp1231;) {
            var $tmp1233, $tmp1234, $tmp1235, $tmp1230, $tmp1231, $tmp1236;
            $tmp1234 = x_array[0];
            $tmp1235 = lowprimes[i];
            $tmp1233 = $tmp1234 == $tmp1235;
            if ($tmp1233) {
                return true;
            } else {
            }
            $tmp1230 = ++i;
            $tmp1236 = lowprimes.length;
            $tmp1231 = i < $tmp1236;
        }
        return false;
    } else {
    }
    $tmp1225 = x.isEven();
    if ($tmp1225) {
        return false;
    } else {
    }
    i = 1;
    $tmp1227 = lowprimes.length;
    $tmp1226 = i < $tmp1227;
    while ($tmp1226) {
        var m, j, $tmp1237, $tmp1238, $tmp1226, $tmp1239;
        m = lowprimes[i];
        j = i + 1;
        $tmp1237 = j < lowprimes.length && m < lplim;
        while ($tmp1237) {
            var $tmp1240, $tmp1237;
            $tmp1240 = j++;
            m *= lowprimes[$tmp1240];
            $tmp1237 = j < lowprimes.length && m < lplim;
        }
        m = x.modInt(m);
        $tmp1238 = i < j;
        while ($tmp1238) {
            var $tmp1241, $tmp1242, $tmp1243, $tmp1244, $tmp1238;
            $tmp1244 = i++;
            $tmp1243 = lowprimes[$tmp1244];
            $tmp1242 = m % $tmp1243;
            $tmp1241 = $tmp1242 == 0;
            if ($tmp1241) {
                return false;
            } else {
            }
            $tmp1238 = i < j;
        }
        $tmp1239 = lowprimes.length;
        $tmp1226 = i < $tmp1239;
    }
    $tmp1228 = x.millerRabin(t);
    return $tmp1228;
}
function bnpMillerRabin(t) {
    var n1, $tmp1245, $tmp1246, k, $tmp1247, r, $tmp1248, $tmp1249, $tmp1250, a, i, $tmp1252;
    $tmp1245 = this;
    $tmp1246 = BigInteger.ONE;
    n1 = $tmp1245.subtract($tmp1246);
    k = n1.getLowestSetBit();
    $tmp1247 = k <= 0;
    if ($tmp1247) {
        return false;
    } else {
    }
    r = n1.shiftRight(k);
    $tmp1248 = t + 1;
    t = $tmp1248 >> 1;
    $tmp1250 = lowprimes.length;
    $tmp1249 = t > $tmp1250;
    if ($tmp1249) {
        t = lowprimes.length;
    } else {
    }
    a = nbi();
    i = 0;
    $tmp1252 = i < t;
    for (; $tmp1252;) {
        var $tmp1253, $tmp1254, y, $tmp1255, $tmp1256, $tmp1251, $tmp1252;
        $tmp1254 = lowprimes[i];
        $tmp1253 = a.fromInt($tmp1254);
        $tmp1255 = this;
        y = a.modPow(r, $tmp1255);
        $tmp1256 = y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0;
        if ($tmp1256) {
            var j, $tmp1257, $tmp1258, $tmp1259;
            j = 1;
            $tmp1257 = j++ < k && y.compareTo(n1) != 0;
            while ($tmp1257) {
                var $tmp1260, $tmp1261, $tmp1262, $tmp1263, $tmp1257;
                $tmp1260 = this;
                y = y.modPowInt(2, $tmp1260);
                $tmp1263 = BigInteger.ONE;
                $tmp1262 = y.compareTo($tmp1263);
                $tmp1261 = $tmp1262 == 0;
                if ($tmp1261) {
                    return false;
                } else {
                }
                $tmp1257 = j++ < k && y.compareTo(n1) != 0;
            }
            $tmp1259 = y.compareTo(n1);
            $tmp1258 = $tmp1259 != 0;
            if ($tmp1258) {
                return false;
            } else {
            }
        } else {
        }
        $tmp1251 = ++i;
        $tmp1252 = i < t;
    }
    return true;
}
$tmp58 = BigInteger.prototype;
$tmp58.chunkSize = bnpChunkSize;
$tmp59 = BigInteger.prototype;
$tmp59.toRadix = bnpToRadix;
$tmp60 = BigInteger.prototype;
$tmp60.fromRadix = bnpFromRadix;
$tmp61 = BigInteger.prototype;
$tmp61.fromNumber = bnpFromNumber;
$tmp62 = BigInteger.prototype;
$tmp62.bitwiseTo = bnpBitwiseTo;
$tmp63 = BigInteger.prototype;
$tmp63.changeBit = bnpChangeBit;
$tmp64 = BigInteger.prototype;
$tmp64.addTo = bnpAddTo;
$tmp65 = BigInteger.prototype;
$tmp65.dMultiply = bnpDMultiply;
$tmp66 = BigInteger.prototype;
$tmp66.dAddOffset = bnpDAddOffset;
$tmp67 = BigInteger.prototype;
$tmp67.multiplyLowerTo = bnpMultiplyLowerTo;
$tmp68 = BigInteger.prototype;
$tmp68.multiplyUpperTo = bnpMultiplyUpperTo;
$tmp69 = BigInteger.prototype;
$tmp69.modInt = bnpModInt;
$tmp70 = BigInteger.prototype;
$tmp70.millerRabin = bnpMillerRabin;
$tmp71 = BigInteger.prototype;
$tmp71.clone = bnClone;
$tmp72 = BigInteger.prototype;
$tmp72.intValue = bnIntValue;
$tmp73 = BigInteger.prototype;
$tmp73.byteValue = bnByteValue;
$tmp74 = BigInteger.prototype;
$tmp74.shortValue = bnShortValue;
$tmp75 = BigInteger.prototype;
$tmp75.signum = bnSigNum;
$tmp76 = BigInteger.prototype;
$tmp76.toByteArray = bnToByteArray;
$tmp77 = BigInteger.prototype;
$tmp77.equals = bnEquals;
$tmp78 = BigInteger.prototype;
$tmp78.min = bnMin;
$tmp79 = BigInteger.prototype;
$tmp79.max = bnMax;
$tmp80 = BigInteger.prototype;
$tmp80.and = bnAnd;
$tmp81 = BigInteger.prototype;
$tmp81.or = bnOr;
$tmp82 = BigInteger.prototype;
$tmp82.xor = bnXor;
$tmp83 = BigInteger.prototype;
$tmp83.andNot = bnAndNot;
$tmp84 = BigInteger.prototype;
$tmp84.not = bnNot;
$tmp85 = BigInteger.prototype;
$tmp85.shiftLeft = bnShiftLeft;
$tmp86 = BigInteger.prototype;
$tmp86.shiftRight = bnShiftRight;
$tmp87 = BigInteger.prototype;
$tmp87.getLowestSetBit = bnGetLowestSetBit;
$tmp88 = BigInteger.prototype;
$tmp88.bitCount = bnBitCount;
$tmp89 = BigInteger.prototype;
$tmp89.testBit = bnTestBit;
$tmp90 = BigInteger.prototype;
$tmp90.setBit = bnSetBit;
$tmp91 = BigInteger.prototype;
$tmp91.clearBit = bnClearBit;
$tmp92 = BigInteger.prototype;
$tmp92.flipBit = bnFlipBit;
$tmp93 = BigInteger.prototype;
$tmp93.add = bnAdd;
$tmp94 = BigInteger.prototype;
$tmp94.subtract = bnSubtract;
$tmp95 = BigInteger.prototype;
$tmp95.multiply = bnMultiply;
$tmp96 = BigInteger.prototype;
$tmp96.divide = bnDivide;
$tmp97 = BigInteger.prototype;
$tmp97.remainder = bnRemainder;
$tmp98 = BigInteger.prototype;
$tmp98.divideAndRemainder = bnDivideAndRemainder;
$tmp99 = BigInteger.prototype;
$tmp99.modPow = bnModPow;
$tmp100 = BigInteger.prototype;
$tmp100.modInverse = bnModInverse;
$tmp101 = BigInteger.prototype;
$tmp101.pow = bnPow;
$tmp102 = BigInteger.prototype;
$tmp102.gcd = bnGCD;
$tmp103 = BigInteger.prototype;
$tmp103.isProbablePrime = bnIsProbablePrime;
function Arcfour() {
    var $tmp1264, $tmp1265, $tmp1266;
    $tmp1264 = this;
    $tmp1264.i = 0;
    $tmp1265 = this;
    $tmp1265.j = 0;
    $tmp1266 = this;
    $tmp1266.S = new Array();
}
function ARC4init(key) {
    var i, j, t, $tmp1267, $tmp1269, $tmp1270, $tmp1272, $tmp1273, $tmp1274;
    $tmp1267 = i = 0;
    $tmp1269 = i < 256;
    for (; $tmp1269;) {
        var $tmp1275, $tmp1276, $tmp1268, $tmp1269;
        $tmp1276 = this;
        $tmp1275 = $tmp1276.S;
        $tmp1275[i] = i;
        $tmp1268 = ++i;
        $tmp1269 = i < 256;
    }
    j = 0;
    $tmp1270 = i = 0;
    $tmp1272 = i < 256;
    for (; $tmp1272;) {
        var $tmp1277, $tmp1278, $tmp1279, $tmp1280, $tmp1281, $tmp1282, $tmp1283, $tmp1284, $tmp1285, $tmp1286, $tmp1287, $tmp1288, $tmp1289, $tmp1290, $tmp1291, $tmp1292, $tmp1271, $tmp1272;
        $tmp1281 = this;
        $tmp1280 = $tmp1281.S;
        $tmp1279 = $tmp1280[i];
        $tmp1278 = j + $tmp1279;
        $tmp1284 = key.length;
        $tmp1283 = i % $tmp1284;
        $tmp1282 = key[$tmp1283];
        $tmp1277 = $tmp1278 + $tmp1282;
        j = $tmp1277 & 255;
        $tmp1286 = this;
        $tmp1285 = $tmp1286.S;
        t = $tmp1285[i];
        $tmp1288 = this;
        $tmp1287 = $tmp1288.S;
        $tmp1290 = this;
        $tmp1289 = $tmp1290.S;
        $tmp1287[i] = $tmp1289[j];
        $tmp1292 = this;
        $tmp1291 = $tmp1292.S;
        $tmp1291[j] = t;
        $tmp1271 = ++i;
        $tmp1272 = i < 256;
    }
    $tmp1273 = this;
    $tmp1273.i = 0;
    $tmp1274 = this;
    $tmp1274.j = 0;
}
function ARC4next() {
    var t, $tmp1293, $tmp1294, $tmp1295, $tmp1296, $tmp1297, $tmp1298, $tmp1299, $tmp1300, $tmp1301, $tmp1302, $tmp1303, $tmp1304, $tmp1305, $tmp1306, $tmp1307, $tmp1308, $tmp1309, $tmp1310, $tmp1311, $tmp1312, $tmp1313, $tmp1314, $tmp1315, $tmp1316, $tmp1317, $tmp1318, $tmp1319, $tmp1320, $tmp1321, $tmp1322, $tmp1323, $tmp1324, $tmp1325, $tmp1326, $tmp1327, $tmp1328, $tmp1329, $tmp1330, $tmp1331;
    $tmp1293 = this;
    $tmp1296 = this;
    $tmp1295 = $tmp1296.i;
    $tmp1294 = $tmp1295 + 1;
    $tmp1293.i = $tmp1294 & 255;
    $tmp1297 = this;
    $tmp1300 = this;
    $tmp1299 = $tmp1300.j;
    $tmp1303 = this;
    $tmp1302 = $tmp1303.S;
    $tmp1305 = this;
    $tmp1304 = $tmp1305.i;
    $tmp1301 = $tmp1302[$tmp1304];
    $tmp1298 = $tmp1299 + $tmp1301;
    $tmp1297.j = $tmp1298 & 255;
    $tmp1307 = this;
    $tmp1306 = $tmp1307.S;
    $tmp1309 = this;
    $tmp1308 = $tmp1309.i;
    t = $tmp1306[$tmp1308];
    $tmp1311 = this;
    $tmp1310 = $tmp1311.S;
    $tmp1313 = this;
    $tmp1312 = $tmp1313.i;
    $tmp1315 = this;
    $tmp1314 = $tmp1315.S;
    $tmp1317 = this;
    $tmp1316 = $tmp1317.j;
    $tmp1310[$tmp1312] = $tmp1314[$tmp1316];
    $tmp1319 = this;
    $tmp1318 = $tmp1319.S;
    $tmp1321 = this;
    $tmp1320 = $tmp1321.j;
    $tmp1318[$tmp1320] = t;
    $tmp1324 = this;
    $tmp1323 = $tmp1324.S;
    $tmp1329 = this;
    $tmp1328 = $tmp1329.S;
    $tmp1331 = this;
    $tmp1330 = $tmp1331.i;
    $tmp1327 = $tmp1328[$tmp1330];
    $tmp1326 = t + $tmp1327;
    $tmp1325 = $tmp1326 & 255;
    $tmp1322 = $tmp1323[$tmp1325];
    return $tmp1322;
}
$tmp104 = Arcfour.prototype;
$tmp104.init = ARC4init;
$tmp105 = Arcfour.prototype;
$tmp105.next = ARC4next;
function prng_newstate() {
    var $tmp1332;
    $tmp1332 = new Arcfour();
    return $tmp1332;
}
rng_psize = 256;
function rng_seed_int(x) {
    var $tmp1333, $tmp1334, $tmp1335, $tmp1336, $tmp1337, $tmp1338, $tmp1339, $tmp1340;
    $tmp1333 = rng_pptr++;
    rng_pool[$tmp1333] ^= x & 255;
    $tmp1334 = rng_pptr++;
    $tmp1335 = x >> 8;
    rng_pool[$tmp1334] ^= $tmp1335 & 255;
    $tmp1336 = rng_pptr++;
    $tmp1337 = x >> 16;
    rng_pool[$tmp1336] ^= $tmp1337 & 255;
    $tmp1338 = rng_pptr++;
    $tmp1339 = x >> 24;
    rng_pool[$tmp1338] ^= $tmp1339 & 255;
    $tmp1340 = rng_pptr >= rng_psize;
    if ($tmp1340) {
        rng_pptr -= rng_psize;
    } else {
    }
}
function rng_seed_time() {
    var $tmp1341;
    $tmp1341 = rng_seed_int(1122926989487);
}
$tmp106 = rng_pool == null;
if ($tmp106) {
    rng_pool = new Array();
    rng_pptr = 0;
    var t, $tmp1342, $tmp1343;
    $tmp1342 = rng_pptr < rng_psize;
    while ($tmp1342) {
        var $tmp1344, $tmp1345, $tmp1346, $tmp1347, $tmp1342;
        $tmp1345 = Math.random();
        $tmp1344 = 65536 * $tmp1345;
        t = Math.floor($tmp1344);
        $tmp1346 = rng_pptr++;
        rng_pool[$tmp1346] = t >>> 8;
        $tmp1347 = rng_pptr++;
        rng_pool[$tmp1347] = t & 255;
        $tmp1342 = rng_pptr < rng_psize;
    }
    rng_pptr = 0;
    $tmp1343 = rng_seed_time();
} else {
}
function rng_get_byte() {
    var $tmp1348, $tmp1349;
    $tmp1348 = rng_state == null;
    if ($tmp1348) {
        var $tmp1350, $tmp1351, $tmp1352, $tmp1354, $tmp1355;
        $tmp1350 = rng_seed_time();
        rng_state = prng_newstate();
        $tmp1351 = rng_state.init(rng_pool);
        $tmp1352 = rng_pptr = 0;
        $tmp1355 = rng_pool.length;
        $tmp1354 = rng_pptr < $tmp1355;
        for (; $tmp1354;) {
            rng_pool[rng_pptr] = 0;
            var $tmp1353, $tmp1354, $tmp1356;
            $tmp1353 = ++rng_pptr;
            $tmp1356 = rng_pool.length;
            $tmp1354 = rng_pptr < $tmp1356;
        }
        rng_pptr = 0;
    } else {
    }
    $tmp1349 = rng_state.next();
    return $tmp1349;
}
function rng_get_bytes(ba) {
    var i, $tmp1357, $tmp1359, $tmp1360;
    $tmp1357 = i = 0;
    $tmp1360 = ba.length;
    $tmp1359 = i < $tmp1360;
    for (; $tmp1359;) {
        ba[i] = rng_get_byte();
        var $tmp1358, $tmp1359, $tmp1361;
        $tmp1358 = ++i;
        $tmp1361 = ba.length;
        $tmp1359 = i < $tmp1361;
    }
}
function SecureRandom() {
}
$tmp107 = SecureRandom.prototype;
$tmp107.nextBytes = rng_get_bytes;
function parseBigInt(str, r) {
    var $tmp1362;
    $tmp1362 = new BigInteger(str, r);
    return $tmp1362;
}
function linebrk(s, n) {
    var ret, i, $tmp1363, $tmp1364, $tmp1365, $tmp1366, $tmp1367, $tmp1368;
    ret = '';
    i = 0;
    $tmp1364 = i + n;
    $tmp1365 = s.length;
    $tmp1363 = $tmp1364 < $tmp1365;
    while ($tmp1363) {
        var $tmp1369, $tmp1370, $tmp1363, $tmp1371, $tmp1372;
        $tmp1370 = i + n;
        $tmp1369 = s.substring(i, $tmp1370);
        ret += $tmp1369 + '\n';
        i += n;
        $tmp1371 = i + n;
        $tmp1372 = s.length;
        $tmp1363 = $tmp1371 < $tmp1372;
    }
    $tmp1368 = s.length;
    $tmp1367 = s.substring(i, $tmp1368);
    $tmp1366 = ret + $tmp1367;
    return $tmp1366;
}
function byte2Hex(b) {
    var $tmp1373;
    $tmp1373 = b < 16;
    if ($tmp1373) {
        var $tmp1787, $tmp1788;
        $tmp1788 = b.toString(16);
        $tmp1787 = '0' + $tmp1788;
        return $tmp1787;
    } else {
        var $tmp1789;
        $tmp1789 = b.toString(16);
        return $tmp1789;
    }
}
function pkcs1pad2(s, n) {
    var $tmp1374, $tmp1375, $tmp1376, ba, i, $tmp1377, $tmp1378, $tmp1379, rng, x, $tmp1380, $tmp1381, $tmp1382, $tmp1383;
    $tmp1376 = s.length;
    $tmp1375 = $tmp1376 + 11;
    $tmp1374 = n < $tmp1375;
    if ($tmp1374) {
        var $tmp1384;
        $tmp1384 = alert('Message too long for RSA');
        return null;
    } else {
    }
    ba = new Array();
    $tmp1377 = s.length;
    i = $tmp1377 - 1;
    $tmp1378 = i >= 0 && n > 0;
    while ($tmp1378) {
        var $tmp1385, $tmp1386, $tmp1378;
        $tmp1385 = --n;
        $tmp1386 = i--;
        ba[$tmp1385] = s.charCodeAt($tmp1386);
        $tmp1378 = i >= 0 && n > 0;
    }
    $tmp1379 = --n;
    ba[$tmp1379] = 0;
    rng = new SecureRandom();
    x = new Array();
    $tmp1380 = n > 2;
    while ($tmp1380) {
        x[0] = 0;
        var $tmp1387, $tmp1388, $tmp1389, $tmp1380;
        $tmp1388 = x[0];
        $tmp1387 = $tmp1388 == 0;
        while ($tmp1387) {
            var $tmp1390, $tmp1387, $tmp1391;
            $tmp1390 = rng.nextBytes(x);
            $tmp1391 = x[0];
            $tmp1387 = $tmp1391 == 0;
        }
        $tmp1389 = --n;
        ba[$tmp1389] = x[0];
        $tmp1380 = n > 2;
    }
    $tmp1381 = --n;
    ba[$tmp1381] = 2;
    $tmp1382 = --n;
    ba[$tmp1382] = 0;
    $tmp1383 = new BigInteger(ba);
    return $tmp1383;
}
function RSAKey() {
    var $tmp1392, $tmp1393, $tmp1394, $tmp1395, $tmp1396, $tmp1397, $tmp1398, $tmp1399;
    $tmp1392 = this;
    $tmp1392.n = null;
    $tmp1393 = this;
    $tmp1393.e = 0;
    $tmp1394 = this;
    $tmp1394.d = null;
    $tmp1395 = this;
    $tmp1395.p = null;
    $tmp1396 = this;
    $tmp1396.q = null;
    $tmp1397 = this;
    $tmp1397.dmp1 = null;
    $tmp1398 = this;
    $tmp1398.dmq1 = null;
    $tmp1399 = this;
    $tmp1399.coeff = null;
}
function RSASetPublic(N, E) {
    var $tmp1400;
    $tmp1400 = N != null && E != null && N.length > 0 && E.length > 0;
    if ($tmp1400) {
        var $tmp1401, $tmp1402;
        $tmp1401 = this;
        $tmp1401.n = parseBigInt(N, 16);
        $tmp1402 = this;
        $tmp1402.e = parseInt(E, 16);
    } else {
        var $tmp1790;
        $tmp1790 = alert('Invalid RSA public key');
    }
}
function RSADoPublic(x) {
    var $tmp1403, $tmp1404, $tmp1405, $tmp1406, $tmp1407;
    $tmp1405 = this;
    $tmp1404 = $tmp1405.e;
    $tmp1407 = this;
    $tmp1406 = $tmp1407.n;
    $tmp1403 = x.modPowInt($tmp1404, $tmp1406);
    return $tmp1403;
}
function RSAEncrypt(text) {
    var m, $tmp1408, $tmp1409, $tmp1410, $tmp1411, $tmp1412, $tmp1413, c, $tmp1414, $tmp1415, h, $tmp1416, $tmp1417, $tmp1418;
    $tmp1412 = this;
    $tmp1411 = $tmp1412.n;
    $tmp1410 = $tmp1411.bitLength();
    $tmp1409 = $tmp1410 + 7;
    $tmp1408 = $tmp1409 >> 3;
    m = pkcs1pad2(text, $tmp1408);
    $tmp1413 = m == null;
    if ($tmp1413) {
        return null;
    } else {
    }
    $tmp1414 = this;
    c = $tmp1414.doPublic(m);
    $tmp1415 = c == null;
    if ($tmp1415) {
        return null;
    } else {
    }
    h = c.toString(16);
    $tmp1418 = h.length;
    $tmp1417 = $tmp1418 & 1;
    $tmp1416 = $tmp1417 == 0;
    if ($tmp1416) {
        return h;
    } else {
        var $tmp1791;
        $tmp1791 = '0' + h;
        return $tmp1791;
    }
}
$tmp108 = RSAKey.prototype;
$tmp108.doPublic = RSADoPublic;
$tmp109 = RSAKey.prototype;
$tmp109.setPublic = RSASetPublic;
$tmp110 = RSAKey.prototype;
$tmp110.encrypt = RSAEncrypt;
function pkcs1unpad2(d, n) {
    var b, i, $tmp1419, $tmp1420, $tmp1421, $tmp1422, $tmp1423, ret, $tmp1424, $tmp1425, $tmp1426;
    b = d.toByteArray();
    i = 0;
    $tmp1419 = i < b.length && b[i] == 0;
    while ($tmp1419) {
        var $tmp1427, $tmp1419;
        $tmp1427 = ++i;
        $tmp1419 = i < b.length && b[i] == 0;
    }
    $tmp1420 = b.length - i != n - 1 || b[i] != 2;
    if ($tmp1420) {
        return null;
    } else {
    }
    $tmp1421 = ++i;
    $tmp1423 = b[i];
    $tmp1422 = $tmp1423 != 0;
    while ($tmp1422) {
        var $tmp1428, $tmp1429, $tmp1430, $tmp1422, $tmp1431;
        $tmp1429 = ++i;
        $tmp1430 = b.length;
        $tmp1428 = $tmp1429 >= $tmp1430;
        if ($tmp1428) {
            return null;
        } else {
        }
        $tmp1431 = b[i];
        $tmp1422 = $tmp1431 != 0;
    }
    ret = '';
    $tmp1425 = ++i;
    $tmp1426 = b.length;
    $tmp1424 = $tmp1425 < $tmp1426;
    while ($tmp1424) {
        var $tmp1432, $tmp1424, $tmp1433, $tmp1434;
        $tmp1432 = b[i];
        ret += String.fromCharCode($tmp1432);
        $tmp1433 = ++i;
        $tmp1434 = b.length;
        $tmp1424 = $tmp1433 < $tmp1434;
    }
    return ret;
}
function RSASetPrivate(N, E, D) {
    var $tmp1435;
    $tmp1435 = N != null && E != null && N.length > 0 && E.length > 0;
    if ($tmp1435) {
        var $tmp1436, $tmp1437, $tmp1438;
        $tmp1436 = this;
        $tmp1436.n = parseBigInt(N, 16);
        $tmp1437 = this;
        $tmp1437.e = parseInt(E, 16);
        $tmp1438 = this;
        $tmp1438.d = parseBigInt(D, 16);
    } else {
        var $tmp1792;
        $tmp1792 = alert('Invalid RSA private key');
    }
}
function RSASetPrivateEx(N, E, D, P, Q, DP, DQ, C) {
    var $tmp1439;
    $tmp1439 = N != null && E != null && N.length > 0 && E.length > 0;
    if ($tmp1439) {
        var $tmp1440, $tmp1441, $tmp1442, $tmp1443, $tmp1444, $tmp1445, $tmp1446, $tmp1447;
        $tmp1440 = this;
        $tmp1440.n = parseBigInt(N, 16);
        $tmp1441 = this;
        $tmp1441.e = parseInt(E, 16);
        $tmp1442 = this;
        $tmp1442.d = parseBigInt(D, 16);
        $tmp1443 = this;
        $tmp1443.p = parseBigInt(P, 16);
        $tmp1444 = this;
        $tmp1444.q = parseBigInt(Q, 16);
        $tmp1445 = this;
        $tmp1445.dmp1 = parseBigInt(DP, 16);
        $tmp1446 = this;
        $tmp1446.dmq1 = parseBigInt(DQ, 16);
        $tmp1447 = this;
        $tmp1447.coeff = parseBigInt(C, 16);
    } else {
        var $tmp1793;
        $tmp1793 = alert('Invalid RSA private key');
    }
}
function RSAGenerate(B, E) {
    var rng, qs, $tmp1448, ee;
    rng = new SecureRandom();
    qs = B >> 1;
    $tmp1448 = this;
    $tmp1448.e = parseInt(E, 16);
    ee = new BigInteger(E, 16);
    for (;;) {
        for (;;) {
            var $tmp1465, $tmp1466, $tmp1467;
            $tmp1465 = this;
            $tmp1466 = B - qs;
            $tmp1465.p = new BigInteger($tmp1466, 1, rng);
            $tmp1467 = this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10);
            if ($tmp1467) {
                break;
            } else {
            }
        }
        for (;;) {
            var $tmp1468, $tmp1469;
            $tmp1468 = this;
            $tmp1468.q = new BigInteger(qs, 1, rng);
            $tmp1469 = this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10);
            if ($tmp1469) {
                break;
            } else {
            }
        }
        var $tmp1449, $tmp1450, $tmp1451, $tmp1452, $tmp1453, $tmp1454, p1, $tmp1455, $tmp1456, $tmp1457, q1, $tmp1458, $tmp1459, $tmp1460, phi, $tmp1461, $tmp1462, $tmp1463, $tmp1464;
        $tmp1452 = this;
        $tmp1451 = $tmp1452.p;
        $tmp1454 = this;
        $tmp1453 = $tmp1454.q;
        $tmp1450 = $tmp1451.compareTo($tmp1453);
        $tmp1449 = $tmp1450 <= 0;
        if ($tmp1449) {
            var t, $tmp1470, $tmp1471, $tmp1472, $tmp1473;
            $tmp1470 = this;
            t = $tmp1470.p;
            $tmp1471 = this;
            $tmp1472 = this;
            $tmp1471.p = $tmp1472.q;
            $tmp1473 = this;
            $tmp1473.q = t;
        } else {
        }
        $tmp1456 = this;
        $tmp1455 = $tmp1456.p;
        $tmp1457 = BigInteger.ONE;
        p1 = $tmp1455.subtract($tmp1457);
        $tmp1459 = this;
        $tmp1458 = $tmp1459.q;
        $tmp1460 = BigInteger.ONE;
        q1 = $tmp1458.subtract($tmp1460);
        phi = p1.multiply(q1);
        $tmp1463 = phi.gcd(ee);
        $tmp1464 = BigInteger.ONE;
        $tmp1462 = $tmp1463.compareTo($tmp1464);
        $tmp1461 = $tmp1462 == 0;
        if ($tmp1461) {
            var $tmp1474, $tmp1475, $tmp1476, $tmp1477, $tmp1478, $tmp1479, $tmp1480, $tmp1481, $tmp1482, $tmp1483, $tmp1484, $tmp1485, $tmp1486, $tmp1487, $tmp1488, $tmp1489, $tmp1490;
            $tmp1474 = this;
            $tmp1476 = this;
            $tmp1475 = $tmp1476.p;
            $tmp1478 = this;
            $tmp1477 = $tmp1478.q;
            $tmp1474.n = $tmp1475.multiply($tmp1477);
            $tmp1479 = this;
            $tmp1479.d = ee.modInverse(phi);
            $tmp1480 = this;
            $tmp1482 = this;
            $tmp1481 = $tmp1482.d;
            $tmp1480.dmp1 = $tmp1481.mod(p1);
            $tmp1483 = this;
            $tmp1485 = this;
            $tmp1484 = $tmp1485.d;
            $tmp1483.dmq1 = $tmp1484.mod(q1);
            $tmp1486 = this;
            $tmp1488 = this;
            $tmp1487 = $tmp1488.q;
            $tmp1490 = this;
            $tmp1489 = $tmp1490.p;
            $tmp1486.coeff = $tmp1487.modInverse($tmp1489);
            break;
        } else {
        }
    }
}
function RSADoPrivate(x) {
    var $tmp1491, xp, $tmp1492, $tmp1493, $tmp1494, $tmp1495, $tmp1496, $tmp1497, $tmp1498, xq, $tmp1499, $tmp1500, $tmp1501, $tmp1502, $tmp1503, $tmp1504, $tmp1505, $tmp1506, $tmp1507, $tmp1508, $tmp1509, $tmp1510, $tmp1511, $tmp1512, $tmp1513, $tmp1514, $tmp1515, $tmp1516, $tmp1517, $tmp1518;
    $tmp1491 = this.p == null || this.q == null;
    if ($tmp1491) {
        var $tmp1794, $tmp1795, $tmp1796, $tmp1797, $tmp1798;
        $tmp1796 = this;
        $tmp1795 = $tmp1796.d;
        $tmp1798 = this;
        $tmp1797 = $tmp1798.n;
        $tmp1794 = x.modPow($tmp1795, $tmp1797);
        return $tmp1794;
    } else {
    }
    $tmp1494 = this;
    $tmp1493 = $tmp1494.p;
    $tmp1492 = x.mod($tmp1493);
    $tmp1496 = this;
    $tmp1495 = $tmp1496.dmp1;
    $tmp1498 = this;
    $tmp1497 = $tmp1498.p;
    xp = $tmp1492.modPow($tmp1495, $tmp1497);
    $tmp1501 = this;
    $tmp1500 = $tmp1501.q;
    $tmp1499 = x.mod($tmp1500);
    $tmp1503 = this;
    $tmp1502 = $tmp1503.dmq1;
    $tmp1505 = this;
    $tmp1504 = $tmp1505.q;
    xq = $tmp1499.modPow($tmp1502, $tmp1504);
    $tmp1507 = xp.compareTo(xq);
    $tmp1506 = $tmp1507 < 0;
    while ($tmp1506) {
        var $tmp1519, $tmp1520, $tmp1506, $tmp1521;
        $tmp1520 = this;
        $tmp1519 = $tmp1520.p;
        xp = xp.add($tmp1519);
        $tmp1521 = xp.compareTo(xq);
        $tmp1506 = $tmp1521 < 0;
    }
    $tmp1512 = xp.subtract(xq);
    $tmp1514 = this;
    $tmp1513 = $tmp1514.coeff;
    $tmp1511 = $tmp1512.multiply($tmp1513);
    $tmp1516 = this;
    $tmp1515 = $tmp1516.p;
    $tmp1510 = $tmp1511.mod($tmp1515);
    $tmp1518 = this;
    $tmp1517 = $tmp1518.q;
    $tmp1509 = $tmp1510.multiply($tmp1517);
    $tmp1508 = $tmp1509.add(xq);
    return $tmp1508;
}
function RSADecrypt(ctext) {
    var c, m, $tmp1522, $tmp1523, $tmp1524, $tmp1525, $tmp1526, $tmp1527, $tmp1528, $tmp1529;
    c = parseBigInt(ctext, 16);
    $tmp1522 = this;
    m = $tmp1522.doPrivate(c);
    $tmp1523 = m == null;
    if ($tmp1523) {
        return null;
    } else {
    }
    $tmp1529 = this;
    $tmp1528 = $tmp1529.n;
    $tmp1527 = $tmp1528.bitLength();
    $tmp1526 = $tmp1527 + 7;
    $tmp1525 = $tmp1526 >> 3;
    $tmp1524 = pkcs1unpad2(m, $tmp1525);
    return $tmp1524;
}
$tmp111 = RSAKey.prototype;
$tmp111.doPrivate = RSADoPrivate;
$tmp112 = RSAKey.prototype;
$tmp112.setPrivate = RSASetPrivate;
$tmp113 = RSAKey.prototype;
$tmp113.setPrivateEx = RSASetPrivateEx;
$tmp114 = RSAKey.prototype;
$tmp114.generate = RSAGenerate;
$tmp115 = RSAKey.prototype;
$tmp115.decrypt = RSADecrypt;
nValue = 'a5261939975948bb7a58dffe5ff54e65f0498f9175f5a09288810b8975871e99af3b5dd94057b0fc07535f5f97444504fa35169d461d0d30cf0192e307727c065168c788771c561a9400fb49175e9e6aa4e23fe11af69e9412dd23b0cb6684c4c2429bce139e848ab26d0829073351f4acd36074eafd036a5eb83359d2a698d3';
eValue = '10001';
dValue = '8e9912f6d3645894e8d38cb58c0db81ff516cf4c7e5a14c7f1eddb1459d2cded4d8d293fc97aee6aefb861859c8b6a3d1dfe710463e1f9ddc72048c09751971c4a580aa51eb523357a3cc48d31cfad1d4a165066ed92d4748fb6571211da5cb14bc11b6e2df7c1a559e6d5ac1cd5c94703a22891464fba23d0d965086277a161';
pValue = 'd090ce58a92c75233a6486cb0a9209bf3583b64f540c76f5294bb97d285eed33aec220bde14b2417951178ac152ceab6da7090905b478195498b352048f15e7d';
qValue = 'cab575dc652bb66df15a0359609d51d1db184750c00c6698b90ef3465c99655103edbf0d54c56aec0ce3c4d22592338092a126a0cc49f65a4a30d222b411e58f';
dmp1Value = '1a24bca8e273df2f0e47c199bbf678604e7df7215480c77c8db39f49b000ce2cf7500038acfff5433b7d582a01f1826e6f4d42e1c57f5e1fef7b12aabc59fd25';
dmq1Value = '3d06982efbbe47339e1f6d36b1216b8a741d410b0c662f54f7118b27b9a4ec9d914337eb39841d8666f3034408cf94f5b62f11c402fc994fe15a05493150d9fd';
coeffValue = '3a3e731acd8960b7ff9eb81a7ff93bd1cfa74cbd56987db58b4594fb09c09084db1734c8143f98b602b981aaa9243ca28deb69b5b280ee8dcee0fd2625e53250';
$tmp116 = setupEngine(am3, 28);
TEXT = 'The quick brown fox jumped over the extremely lazy frog! ' + 'Now is the time for all good men to come to the party.';
function encrypt() {
    var RSA, $tmp1530, $tmp1531;
    RSA = new RSAKey();
    $tmp1530 = RSA.setPublic(nValue, eValue);
    $tmp1531 = RSA.setPrivateEx(nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue);
    encrypted = RSA.encrypt(TEXT);
}
function decrypt() {
    var RSA, $tmp1532, $tmp1533, decrypted, $tmp1534;
    RSA = new RSAKey();
    $tmp1532 = RSA.setPublic(nValue, eValue);
    $tmp1533 = RSA.setPrivateEx(nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue);
    decrypted = RSA.decrypt(encrypted);
    $tmp1534 = decrypted != TEXT;
    if ($tmp1534) {
        var $tmp1535;
        $tmp1535 = new Error('Crypto operation failed');
        throw $tmp1535;
    } else {
    }
}
$tmp117 = encrypt();
$tmp118 = decrypt();