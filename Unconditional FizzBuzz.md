- Ruby (~5min)
```ruby
a = (0..100).map(&:to_s)

n3 = n5 = 0
while n3 < a.size
  a[n3] = ""
  n3 += 3
end
while n5 < a.size
  a[n5] = ""
  n5 += 5
end

n3 = n5 = 0
while n3 < a.size
  a[n3] += "Fizz"
  n3 += 3
end
while n5 < a.size
  a[n5] += "Buzz"
  n5 += 5
end

puts a
```