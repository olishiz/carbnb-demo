import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { User, Mail, Lock, LogOut, Calendar, Car } from 'lucide-react'
import Swal from 'sweetalert2'

const Account = () => {
  const { user, signUp, signIn, signOut, updateProfile } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)

  // Auth form state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')

  // Profile state
  const [editMode, setEditMode] = useState(false)
  const [profileName, setProfileName] = useState('')
  const [profilePhone, setProfilePhone] = useState('')

  useEffect(() => {
    if (user?.user_metadata) {
      setProfileName(user.user_metadata.full_name || '')
      setProfilePhone(user.user_metadata.phone || '')
    }
  }, [user])

  const handleAuth = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (isLogin) {
      const { error } = await signIn(email, password)
      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error,
          confirmButtonColor: '#000000'
        })
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Welcome Back!',
          text: 'You have successfully logged in.',
          confirmButtonColor: '#000000'
        })
      }
    } else {
      if (!fullName.trim()) {
        Swal.fire({
          icon: 'error',
          title: 'Name Required',
          text: 'Please enter your full name',
          confirmButtonColor: '#000000'
        })
        setLoading(false)
        return
      }

      const { error } = await signUp(email, password, fullName)
      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Sign Up Failed',
          text: error,
          confirmButtonColor: '#000000'
        })
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Account Created!',
          text: 'Please check your email to verify your account.',
          confirmButtonColor: '#000000'
        })
      }
    }

    setLoading(false)
    setEmail('')
    setPassword('')
    setFullName('')
  }

  const handleSignOut = async () => {
    const result = await Swal.fire({
      title: 'Sign Out?',
      text: 'Are you sure you want to sign out?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#000000',
      cancelButtonColor: '#666666',
      confirmButtonText: 'Yes, sign out',
      cancelButtonText: 'Cancel'
    })

    if (result.isConfirmed) {
      const { error } = await signOut()
      if (!error) {
        Swal.fire({
          icon: 'success',
          title: 'Signed Out',
          text: 'You have been signed out successfully.',
          confirmButtonColor: '#000000'
        })
      }
    }
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await updateProfile({
      full_name: profileName,
      phone: profilePhone
    })

    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: error,
        confirmButtonColor: '#000000'
      })
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated!',
        text: 'Your profile has been updated successfully.',
        confirmButtonColor: '#000000'
      })
      setEditMode(false)
    }

    setLoading(false)
  }

  // Logged out view - Auth Form
  if (!user) {
    return (
      <div style={{
        minHeight: 'calc(100vh - 200px)',
        padding: '80px 20px 100px',
        background: 'var(--bg-primary)'
      }}>
        <div style={{
          maxWidth: '450px',
          margin: '0 auto',
          background: 'var(--bg-card)',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid var(--border)'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <User size={32} color="white" />
            </div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '8px'
            }}>
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)'
            }}>
              {isLogin ? 'Sign in to manage your subscriptions' : 'Join CarBnb for luxury car subscriptions'}
            </p>
          </div>

          {/* Auth Form */}
          <form onSubmit={handleAuth}>
            {!isLogin && (
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '8px'
                }}>
                  Full Name
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-tertiary)'
                  }} />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    required={!isLogin}
                    style={{
                      width: '100%',
                      padding: '12px 16px 12px 44px',
                      fontSize: '15px',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  />
                </div>
              </div>
            )}

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '8px'
              }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-tertiary)'
                }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 44px',
                    fontSize: '15px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '8px'
              }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-tertiary)'
                }} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 44px',
                    fontSize: '15px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
              </div>
              {!isLogin && (
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-tertiary)',
                  marginTop: '6px'
                }}>
                  Must be at least 6 characters
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '16px',
                fontWeight: '600',
                background: loading ? '#666666' : 'var(--bg-dark)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: loading ? 'not-allowed' : 'pointer',
                marginBottom: '16px'
              }}
            >
              {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>

            <div style={{
              textAlign: 'center',
              fontSize: '14px',
              color: 'var(--text-secondary)'
            }}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  // Logged in view - Profile Dashboard
  return (
    <div style={{
      minHeight: 'calc(100vh - 200px)',
      padding: '80px 20px 100px',
      background: 'var(--bg-primary)'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Profile Header */}
        <div style={{
          background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
          borderRadius: '16px',
          padding: '40px',
          marginBottom: '30px',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '50%'
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '3px solid rgba(255,255,255,0.3)'
                }}>
                  <User size={40} />
                </div>
                <div>
                  <h1 style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    marginBottom: '4px'
                  }}>
                    {user.user_metadata?.full_name || 'User'}
                  </h1>
                  <p style={{
                    fontSize: '15px',
                    opacity: 0.9
                  }}>
                    {user.email}
                  </p>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="btn"
                style={{
                  padding: '12px 24px',
                  fontSize: '15px',
                  fontWeight: '600',
                  background: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          {/* Stats Card - Active Subscriptions */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '24px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '12px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'var(--bg-primary)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Car size={24} color="var(--text-primary)" />
              </div>
              <div>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-tertiary)',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Active Subscriptions
                </p>
                <p style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: 'var(--text-primary)'
                }}>
                  0
                </p>
              </div>
            </div>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-secondary)'
            }}>
              No active subscriptions yet
            </p>
          </div>

          {/* Stats Card - Member Since */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '24px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '12px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'var(--bg-primary)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Calendar size={24} color="var(--text-primary)" />
              </div>
              <div>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-tertiary)',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Member Since
                </p>
                <p style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'var(--text-primary)'
                }}>
                  {new Date(user.created_at).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-secondary)'
            }}>
              Thank you for being part of CarBnb
            </p>
          </div>
        </div>

        {/* Profile Information */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '32px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: 'var(--text-primary)'
            }}>
              Profile Information
            </h2>
            {!editMode && (
              <button
                onClick={() => setEditMode(true)}
                className="btn"
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Edit Profile
              </button>
            )}
          </div>

          {editMode ? (
            <form onSubmit={handleUpdateProfile}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '8px'
                }}>
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '8px'
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={profilePhone}
                  onChange={(e) => setProfilePhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn"
                  style={{
                    flex: 1,
                    padding: '12px',
                    fontSize: '15px',
                    fontWeight: '600',
                    background: loading ? '#666666' : 'var(--bg-dark)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: loading ? 'not-allowed' : 'pointer'
                  }}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditMode(false)
                    setProfileName(user.user_metadata?.full_name || '')
                    setProfilePhone(user.user_metadata?.phone || '')
                  }}
                  className="btn"
                  style={{
                    flex: 1,
                    padding: '12px',
                    fontSize: '15px',
                    fontWeight: '600',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              <div style={{
                padding: '16px',
                background: 'var(--bg-primary)',
                borderRadius: '8px',
                marginBottom: '12px'
              }}>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-tertiary)',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Full Name
                </p>
                <p style={{
                  fontSize: '16px',
                  color: 'var(--text-primary)',
                  fontWeight: '500'
                }}>
                  {user.user_metadata?.full_name || 'Not set'}
                </p>
              </div>

              <div style={{
                padding: '16px',
                background: 'var(--bg-primary)',
                borderRadius: '8px',
                marginBottom: '12px'
              }}>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-tertiary)',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Email Address
                </p>
                <p style={{
                  fontSize: '16px',
                  color: 'var(--text-primary)',
                  fontWeight: '500'
                }}>
                  {user.email}
                </p>
              </div>

              <div style={{
                padding: '16px',
                background: 'var(--bg-primary)',
                borderRadius: '8px'
              }}>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-tertiary)',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Phone Number
                </p>
                <p style={{
                  fontSize: '16px',
                  color: 'var(--text-primary)',
                  fontWeight: '500'
                }}>
                  {user.user_metadata?.phone || 'Not set'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Account
