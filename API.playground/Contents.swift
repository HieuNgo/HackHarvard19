//: A UIKit based Playground for presenting user interface
  
import UIKit
import PlaygroundSupport


let url = URL(string: "http://api.reimaginebanking.com/atms?key=bf7706e2f5631dd7769d857fd5016081")!

let task = URLSession.shared.dataTask(with: url) {
    (data, response, error) in
    guard let data = data else { return }
    
    print(String(data: data, encoding: String.Encoding.utf8)!)
    print("----------------------------------------------------------------------------------------")
  
}

task.resume()

// Present the view controller in the Live View window
PlaygroundPage.current.liveView
//
//
//let url = NSURL(string: "http://api.reimaginebanking.com/merchants/5dab8b2b322fa016762f33b6/accounts/5dab8b2b322fa016762f33b6/purchases?key=bf7706e2f5631dd7769d857fd5016081")
//let task = NSURLSession.sharedSession().dataTaskWithURL(url!){
//      (data, response, error) in
//      println(NSString(data: data, encoding: NSUTF8StringEncoding))
//}
//task.resume()
