#lang scheme
(define (square x) (* x x))
(define (average x y) (/ (+ x y) 2))
(define (sum-of-square x)
  (+ (square x) 
     (square x)))
;(sum-of-square 3)

;(define (abs x) 
;  (cond ((> x 0) x)
;        ((= x 0) 0)
;        ((< x 0)(- x))))
(define (abs x)
  (if (< x 0) (- x)
      x))
;(abs -2)

;牛顿平方根
(define (sqrt x) 
;精度控制
  (define (good? guess x)
    (< (abs(- (* guess guess)x)) 0.001))
;渐进方式求职
  (define (improve guess x)
    (/ (+ guess (/ x guess)) 2))
;(improve 1 2)
;循环
  (define (sqrt-iter guess x)
    ;(print guess)
    (if (good? guess x) guess
        (sqrt-iter (improve guess x) x)))
  (sqrt-iter 1.0 x))
;(sqrt 9)

;sicp 1.16
(define (fast-expt b n)
  (define (expt-iter b n a)
    (if (= n 1) (* a b)
        (if (even? n) (expt-iter (* b b) (/ n 2) a)
            (expt-iter (* b b) (/ (- n 1) 2) (* b a)))))
  (expt-iter b n 1))
;(fast-expt 10 3)
;1.10 fast fib
(define (fib n)
  (define (fib-iter a b p q count)
    (cond ((= count 0) b)
           ((even? count) (fib-iter a
                                    b
                                    (+ (* p p) (* q q))
                                    (+ (* q q) (* p q 2))
                                    (/ count 2)))
           (else (fib-iter (+ (* b q) (* a q) (* a p))
                           (+ (* b p) (* a q))
                           p 
                           q
                           (- count 1)))))
  (fib-iter 1 0 0 1 n))
;(fib 7)

(define (prime? n)
  (define (divides? a b)
    (= (remainder b a) 0))
  (define (find-divisor n test-divisor)
    (cond ((> (square test-divisor) n) n)
          ((divides? test-divisor n) test-divisor)
          (else (find-divisor n  (+ test-divisor 1)))))
  (define (smallest-divisor n)
    (find-divisor n 2))
  (= n (smallest-divisor n)))
;(prime? 6) (prime? 7)

(define (fixed-point f first-guess)
  (define (close-enought? v1 v2)
    (< (abs (- v1 v2)) 0.00001))
  (define (try guess)
    (display guess)
    (newline)
    (let((next (f guess)))
      (if (close-enought? guess next)
          next
          (try next))))
  (try first-guess))

;(fixed-point cos 1.0)
;1.35
;(fixed-point (lambda (x) (/ (log 1000) (log x))) 2)
;1.36
;(fixed-point (lambda (x) (average x (/ (log 1000) (log x))))2)
(define (sqrt-fixed x)
  (fixed-point (lambda (y)(average y (/ x y)))
               1.0))
;
;(sqrt-fixed 4)
(define (gdc a b)
  (if (= b 0) a
      (gdc b (remainder a b))))

(define (make-rat n d) (cons n d))
(define (numer x) (car x))
(define (denom x) (cdr x))

;accumulate 累积的递归通用形式，combiner为结果合并方法（累加累积），term为参数的处理（立方平方），next为下一个参数
(define (accumulate combiner null-value term a next b)
  (if (> a b)
      null-value
      (combiner (term a)
                (accumulate combiner null-value term (next a) next b))))
;1.3.7 a
(define (cont-frac n d k)
  (define (iter i)
    (if (> i k)
        (/ (n i) (d i)) 
        (/ (n i) ( + (d i)(iter (+ i 1))))))
  (iter 1))
;(cont-frac (lambda (i) 1.0) (lambda (i) 1.0) 10)
(cont-frac (lambda (i) 1.0)
           (lambda (i)
             (let ((rem (remainder i 3)))
               (if (or (= rem 0) (= rem 1))
                   1
                   (* 2 (+ 1 (quotient i 3))))))
           10)

(define (inc x) (+ x 1))
;1.4.1
(define (double fn)
  (lambda (x) (fn (fn x))))


;1.4.2
(define (compose f g)
  (lambda (x)
    (f (g x))))
;((compose square inc) 6)

;1.43
(define (repeat f n)
  (if (= n 1) f
      (compose f (repeat f (- n 1)))))
;((repeat square 2) 5)

;1.4.4
(define (smooth f) 
  (define dx 0.0000001)
  (lambda (x) (/(+ (f x)
                   (f(+ x dx))
                   (f(- x dx)))
               3)))