// export class Contact {
//     id?: number;
//     name: string;
//     email: string;
//     phone: string;
//     address?: string;
  
//     constructor(name: string, email: string, phone: string, address?: string) {
//       this.name = name;
//       this.email = email;
//       this.phone = phone;
//       this.address = address;
//     }
  
//     getFullName(): string {
//       return this.name.toUpperCase(); // Example method
//     }
//   }

// export class Contact {
//     id: number;
//     name: string;
//     email: string;
//     phone: string;
  
//     constructor(id: number, name: string, email: string, phone: string) {
//       this.id = id;
//       this.name = name;
//       this.email = email;
//       this.phone = phone;
//     }
  
//     getFullName(): string {
//       return this.name;
//     }
//   }
  
export class Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string; // ✅ New field added
  
    constructor(id: number, name: string, email: string, phone: string, address: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.address = address;
    }
  
    getFullName(): string {
      return this.name;
    }
  }
  