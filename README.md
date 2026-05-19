# angular-lifecycle-hooks-app
A simple Angular application demonstrating all lifecycle hooks with real-time examples, including component interaction, input binding, content projection, and component destruction.

🚀 Angular Lifecycle Hooks Demo
This project demonstrates all Angular lifecycle hooks using a real-world example with parent-child component interaction.
It helps understand:

When each lifecycle hook is triggered
How Angular change detection works
Component lifecycle flow in real scenarios


✅ 🔧 Features


✅ Demonstrates all lifecycle hooks:

ngOnChanges
ngOnInit
ngDoCheck
ngAfterContentInit
ngAfterContentChecked
ngAfterViewInit
ngAfterViewChecked
ngOnDestroy

✅ Parent → Child communication using @Input
✅ Content projection using <ng-content>
✅ Dynamic updates to trigger lifecycle events
✅ Component destruction using *ngIf



✅ 📂 Project Structure
------------------------------------------------------------------
src/
 ├── app/
 │   ├── app.component.ts      (Parent Component)
 │   ├── app.component.html
 │   ├── child.component.ts    (Lifecycle Hooks Demo)
 │   ├── child.component.html

---------------------------------------------------------------------

✅ ⚙️ How It Works
🔹 Initial Load
-All lifecycle hooks execute in sequence
-Console logs show execution order

🔹 Change Input
-Clicking Change Message updates input property
Triggers:
-ngOnChanges
-ngDoCheck
-ngAfter...Checked

🔹 Destroy Component
Clicking Destroy Child
Triggers:
-ngOnDestroy


✅ 🧪 Example Output (Console)
Constructor called
ngOnChanges called
ngOnInit called
ngDoCheck called
ngAfterContentInit called
ngAfterContentChecked called
ngAfterViewInit called
ngAfterViewChecked called


✅ 🎯 Learning Outcomes

Understand Angular lifecycle flow
Learn when to use each lifecycle hook
Debug lifecycle-related issues like ExpressionChangedAfterItHasBeenCheckedError
Improve component design in Angular applications


✅ 🛠️ Setup & Run
npm install
ng serve

Open browser:
http://localhost:4200


✅ 🧑‍💻 Author
Bharath Pateru
Senior Consultant | Angular | Java | Microservices

✅ ⭐ Use Cases
Angular beginners learning lifecycle hooks
Interview preparation
Debugging lifecycle-related issues
Understanding change detection
