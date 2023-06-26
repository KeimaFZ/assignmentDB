let inmate;

class Inmate {
	static async injectDB(conn) {
		inmate = await conn.db("Prison_VMS").collection("inmate")
	}

	static async register(inmateno, firstname, lastname,  age, gender) {
		// TODO: Check if Inmateno exists
		const res = await inmate.findOne({ Inmateno: inmateno })

			if (res){
				return { status: "duplicate Inmateno"}
			}
			// TODO: Save inmate to database
			inmate.insertOne({
              "Inmateno": inmateno,
							"Firstname": firstname,
							"Lastname": lastname,
							"Age": age,
							"Gender": gender,						
            });
            return { status: "Succesfully register inmate"}
	}

		static async update(Inmateno,Firstname, Lastname,  age, gender){
				inmate.updateOne({Inmateno: Inmateno},{$set:{
              "Firstname": Firstname,
              "Lastname": Lastname,
              "Age": age,
              "Gender": gender,		}})
							return { status: "Information updated"}
		}

		static async delete(Inmateno) {
			inmate.deleteOne({Inmateno: Inmateno})
			return { status: "Inmate deleted!" }
		}

    static async find(Inmateno) {
			return inmate.findOne({Inmateno: Inmateno})
		}

	}

module.exports = Inmate;
