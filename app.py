from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


# Datos temporales de ejemplo
EMPRESA_EJEMPLO = {
    "nombre": "Empresa de Ejemplo",
    "correo": "correo@empresa.com",
    "clave": "123456",
    "vacantes": []  # Lista para almacenar vacantes
}

PERSONA_EJEMPLO = {
    "nombre": "Usuario de Ejemplo",
    "correo": "usuario@ejemplo.com",
    "clave": "123456"
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        correo = request.form.get('email')
        clave = request.form.get('password')
        tipo_usuario = request.form.get('user_type')
        
        print("Datos del formulario:", request.form)
        print("Tipo de usuario seleccionado:", tipo_usuario)
        print("Correo electrónico ingresado:", correo)
        print("Clave ingresada:", clave)

        if tipo_usuario == 'empresa' and correo == EMPRESA_EJEMPLO['correo'] and clave == EMPRESA_EJEMPLO['clave']:
            print("Iniciar sesión como empresa")
            return redirect(url_for('empresa'))
        elif tipo_usuario == 'persona' and correo == PERSONA_EJEMPLO['correo'] and clave == PERSONA_EJEMPLO['clave']:
            print("Iniciar sesión como persona")
            return redirect(url_for('persona'))
        else:
            print("Credenciales incorrectas o tipo de usuario no válido")
            return redirect(url_for('login'))
    else:
        return render_template('login.html')

@app.route('/empresa', methods=['GET', 'POST'])
def empresa():
    return render_template('empresa.html', empresa=EMPRESA_EJEMPLO)

@app.route('/persona', methods=['GET', 'POST'])
def persona():
    return render_template('persona.html', persona=PERSONA_EJEMPLO)

@app.route('/register_empresa', methods=['POST'])
def register_empresa():
    nombre = request.form.get('nombre')
    representante = request.form.get('representante')
    direccion = request.form.get('direccion')
    telefono = request.form.get('telefono')
    correo = request.form.get('correo')
    # Aquí deberíamos guardar los datos en una base de datos temporal o estructura de datos
    return redirect(url_for('empresa'))

@app.route('/register_persona', methods=['POST'])
def register_persona():
    nombre = request.form.get('nombre')
    apellidos = request.form.get('apellidos')
    cedula = request.form.get('cedula')
    direccion = request.form.get('direccion')
    correo = request.form.get('correo')
    profesion = request.form.get('profesion')
    file = request.files.get('file')
    # Aquí deberíamos guardar los datos en una base de datos temporal o estructura de datos
    return redirect(url_for('persona'))

@app.route('/register_vacancy', methods=['POST'])
def register_vacancy():
    vacante = {
        "nombre": request.form.get('nombre'),
        "descripcion": request.form.get('descripcion'),
        "salario": request.form.get('salario'),
        "fecha_publicacion": request.form.get('fecha_publicacion')
    }
    # Agregar la vacante a la lista de vacantes de la empresa
    EMPRESA_EJEMPLO['vacantes'].append(vacante)
    # Redirigir a la página de empresa
    return redirect(url_for('empresa'))




if __name__ == '__main__':
    app.run(debug=True)
