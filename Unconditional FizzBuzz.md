- Ruby (~5min)
```ruby
n = 100
a = (0..n).map(&:to_s)
n3 = n5 = 0

while n3 <= n
  a[n3] = ""
  n3 += 3
end
while n5 <= n
  a[n5] = ""
  n5 += 5
end

n3 = n5 = 0

while n3 <= n
  a[n3] += "Fizz"
  n3 += 3
end
while n5 <= n
  a[n5] += "Buzz"
  n5 += 5
end

puts a
```